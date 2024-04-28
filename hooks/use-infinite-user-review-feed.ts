import { useFindUserReviewPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindUserReviewsOrderByArgs,
  FindUserReviewsWhereArgs,
} from '@/interfaces/user-review.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteUserReviewFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindUserReviewsWhereArgs;
  orderBy?: FindUserReviewsOrderByArgs;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindUserReviewPreviewsQuery({
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
