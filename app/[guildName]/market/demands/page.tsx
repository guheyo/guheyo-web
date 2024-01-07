'use client';

import { useSearchParams } from 'next/navigation';
import { useFindDemandsQuery } from '@/generated/graphql';
import DemandPreview from '@/components/demands/demand-preview';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useRef } from 'react';

export interface DemandsPageProps {
  params: {
    guildName: string;
    categoryId: string;
  };
}

function DemandsPage({ params: { guildName } }: DemandsPageProps) {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');

  const { loading, error, data, fetchMore } = useFindDemandsQuery({
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

  if (loading) return <div>loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findDemands) return <div>null</div>;

  const { edges } = data.findDemands;

  return (
    <div>
      <div className="grid gap-4 grid-cols-1">
        {edges.map((edge) => (
          <div className="col-span-1" key={edge.node.id}>
            <DemandPreview demand={edge.node} />
          </div>
        ))}
      </div>
      <div ref={ref} />
    </div>
  );
}

export default DemandsPage;
