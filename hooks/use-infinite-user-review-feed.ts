import {
  FindUserReviewPreviewsOrderByInput,
  FindUserReviewPreviewsWhereInput,
  useFindUserReviewPreviewsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteUserReviewFeed = ({
  where,
  orderBy,
  keyword,
  target,
  distinct,
  take,
}: {
  where?: FindUserReviewPreviewsWhereInput;
  orderBy?: FindUserReviewPreviewsOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindUserReviewPreviewsQuery({
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
          cursor: data?.findUserReviewPreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findUserReviewPreviews: {
              __typename: previousQueryResult.findUserReviewPreviews.__typename,
              edges: [
                ...previousQueryResult.findUserReviewPreviews.edges,
                ...fetchMoreResult.findUserReviewPreviews.edges,
              ],
              pageInfo: fetchMoreResult.findUserReviewPreviews.pageInfo,
            },
          };
        },
      }),
    data?.findUserReviewPreviews.pageInfo.hasNextPage,
  );

  return { setRef, loading, data };
};
