'use client';

import { useSearchParams } from 'next/navigation';
import { useFindOffersQuery } from '@/generated/graphql';
import OfferPreview from '@/components/offers/offer-preview';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useRef } from 'react';

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

  if (loading) return <div>loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findOffers) return <div>null</div>;

  const { edges } = data.findOffers;

  return (
    <div>
      <div className="grid gap-x-4 md:gap-x-6 gap-y-6 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {edges.map((edge) => (
          <div className="col-span-1" key={edge.node.id}>
            <OfferPreview offer={edge.node} />
          </div>
        ))}
      </div>
      <div ref={ref} />
    </div>
  );
}

export default OffersPage;
