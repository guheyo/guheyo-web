import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
  useFindThreadPreviewsQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteThreadFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindThreadPreviewsWhereInput;
  orderBy?: FindThreadPreviewsOrderByInput;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindThreadPreviewsQuery({
    variables: {
      where,
      orderBy,
      keyword,
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
          cursor: data?.findThreadPreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findThreadPreviews: {
              __typename: previousQueryResult.findThreadPreviews.__typename,
              edges: [
                ...previousQueryResult.findThreadPreviews.edges,
                ...fetchMoreResult.findThreadPreviews.edges,
              ],
              pageInfo: fetchMoreResult.findThreadPreviews.pageInfo,
            },
          };
        },
      }),
    data?.findThreadPreviews.pageInfo.hasNextPage,
  );

  return { loading, data };
};
