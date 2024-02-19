import { useFindDemandsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteDemandFeed = ({
  ref,
  categoryId,
  buyerId,
  status,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  categoryId?: string;
  buyerId?: string;
  status?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindDemandsQuery({
    variables: {
      productCategoryId: categoryId,
      buyerId,
      status,
      take,
      skip: 0,
    },
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          productCategoryId: categoryId,
          buyerId,
          status,
          cursor: data?.findDemands.pageInfo.endCursor,
          take,
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

  return { loading, data };
};
