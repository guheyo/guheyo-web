'use client';

import { useSearchParams } from 'next/navigation';
import { useFindOffersQuery } from '@/generated/graphql';
import OfferPreview from '@/components/offers/offer-preview';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useRef } from 'react';
import { PostMocks } from '@/components/posts/post-mock';

export interface OffersPageProps {
  params: {
    guildName: string;
    categoryId: string;
  };
}

function OffersPage({ params: { guildName } }: OffersPageProps) {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');

  const { loading, error, data, fetchMore } = useFindOffersQuery({
    variables: {
      productCategoryId: categoryId!,
      take: 12,
      skip: 0,
    },
  });

  const ref = useRef<HTMLDivElement>(null);
  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          productCategoryId: categoryId,
          cursor: data?.findOffers.pageInfo.endCursor,
          take: 12,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findOffers: {
              __typename: previousQueryResult.findOffers.__typename,
              edges: [
                ...previousQueryResult.findOffers.edges,
                ...fetchMoreResult.findOffers.edges,
              ],
              pageInfo: fetchMoreResult.findOffers.pageInfo,
            },
          };
        },
      }),
    data?.findOffers.pageInfo.hasNextPage,
  );

  if (loading) return <PostMocks height={72} />;
  if (error) return <div>Error</div>;
  if (!data?.findOffers) return <div>null</div>;

  const { edges } = data.findOffers;

  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-1" key={edge.node.id}>
          <OfferPreview offer={edge.node} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default OffersPage;
