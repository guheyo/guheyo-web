'use client';

import { useSearchParams } from 'next/navigation';
import { useFindSwapsQuery } from '@/generated/graphql';
import SwapPreview from '@/components/swaps/swap-preview';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useRef } from 'react';

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

  if (loading) return <div>loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findSwaps) return <div>null</div>;

  const { edges } = data.findSwaps;

  return (
    <div>
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {edges.map((edge) => (
          <div className="col-span-1" key={edge.node.id}>
            <SwapPreview swap={edge.node} />
          </div>
        ))}
      </div>
      <div ref={ref} />
    </div>
  );
}

export default SwapsPage;
