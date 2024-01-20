'use client';

import { useFindDemandsQuery } from '@/generated/graphql';
import DemandPreview from '@/components/demands/demand-preview';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';

function DemandFeed({ categoryId }: { categoryId: string }) {
  const { loading, error, data, fetchMore } = useFindDemandsQuery({
    variables: {
      productCategoryId: categoryId,
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
          cursor: data?.findDemands.pageInfo.endCursor,
          take: 12,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findDemands: {
              __typename: previousQueryResult.findDemands.__typename,
              edges: [
                ...previousQueryResult.findDemands.edges,
                ...fetchMoreResult.findDemands.edges,
              ],
              pageInfo: fetchMoreResult.findDemands.pageInfo,
            },
          };
        },
      }),
    data?.findDemands.pageInfo.hasNextPage,
  );

  if (loading) return <Mocks length={12} height={32} color="bg-dark-400" />;
  if (error) return <div>Error</div>;
  if (!data?.findDemands) return <div>null</div>;

  const { edges } = data.findDemands;

  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-1" key={edge.node.id}>
          <DemandPreview demand={edge.node} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default DemandFeed;
