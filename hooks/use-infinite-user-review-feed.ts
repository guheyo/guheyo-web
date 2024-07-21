import {
  FindUserReviewPreviewsOrderByInput,
  FindUserReviewPreviewsWhereInput,
  useFindUserReviewPreviewsQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteUserReviewFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  target,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
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

  useInfiniteScroll(
    ref,
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

  return { loading, data };
};
