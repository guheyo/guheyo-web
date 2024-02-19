import { useFindSwapsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteSwapFeed = ({
  ref,
  categoryId,
  status,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  categoryId: string;
  status: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindSwapsQuery({
    variables: {
      productCategoryId: categoryId,
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
          status,
          cursor: data?.findSwaps.pageInfo.endCursor,
          take,
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

  return { loading, data };
};
