import { useFindSwapsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteSwapFeed = ({
  ref,
  categoryId,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  categoryId: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindSwapsQuery({
    variables: {
      productCategoryId: categoryId,
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
