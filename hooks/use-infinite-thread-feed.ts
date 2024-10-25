import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
  useFindThreadPreviewsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteThreadFeed = ({
  where,
  orderBy,
  keyword,
  target,
  distinct,
  take,
}: {
  where?: FindThreadPreviewsWhereInput;
  orderBy?: FindThreadPreviewsOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindThreadPreviewsQuery({
    variables: {
      where,
      orderBy,
      keyword,
      target,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  const setRef = useInfiniteScroll(
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          target,
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

  return { setRef, loading, data };
};
