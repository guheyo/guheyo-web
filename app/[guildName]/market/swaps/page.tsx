'use client';

import { useSearchParams } from 'next/navigation';
import { useFindSwapsQuery } from '@/generated/graphql';
import SwapPreview from '@/components/swaps/swap-preview';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';

export interface SwapsPageProps {
  params: {
    guildName: string;
    categoryId: string;
  };
}

function SwapsPage({ params: { guildName } }: SwapsPageProps) {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');

  const { loading, error, data, fetchMore } = useFindSwapsQuery({
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
          cursor: data?.findSwaps.pageInfo.endCursor,
          take: 12,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findSwaps: {
              __typename: previousQueryResult.findSwaps.__typename,
              edges: [
                ...previousQueryResult.findSwaps.edges,
                ...fetchMoreResult.findSwaps.edges,
              ],
              pageInfo: fetchMoreResult.findSwaps.pageInfo,
            },
          };
        },
      }),
    data?.findSwaps.pageInfo.hasNextPage,
  );

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (error) return <div>Error</div>;
  if (!data?.findSwaps) return <div>null</div>;

  const { edges } = data.findSwaps;

  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-1" key={edge.node.id}>
          <SwapPreview swap={edge.node} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default SwapsPage;
