import { useFindSwapPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteSwapFeed = ({
  ref,
  categoryId,
  proposerId,
  status,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  categoryId?: string;
  proposerId?: string;
  status?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindSwapPreviewsQuery({
    variables: {
      productCategoryId: categoryId,
      proposerId,
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
          proposerId,
          status,
          cursor: data?.findSwapPreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findSwapPreviews: {
              __typename: previousQueryResult.findSwapPreviews.__typename,
              edges: [
                ...previousQueryResult.findSwapPreviews.edges,
                ...fetchMoreResult.findSwapPreviews.edges,
              ],
              pageInfo: fetchMoreResult.findSwapPreviews.pageInfo,
            },
          };
        },
      }),
    data?.findSwapPreviews.pageInfo.hasNextPage,
  );

  return { loading, data };
};
