import { useFindSwapPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindSwapsWhereArgs,
  FindDealsOrderByArgs,
} from '@/interfaces/deal.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteSwapFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindSwapsWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindSwapPreviewsQuery({
    variables: {
      where,
      orderBy,
      keyword,
      distinct,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          distinct,
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
