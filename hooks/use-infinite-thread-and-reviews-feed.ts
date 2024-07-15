import {
  FindThreadPreviewsWhereInput,
  ThreadPreviewResponseEdge,
  useFindThreadPreviewsQuery,
  useFindUserReviewPreviewsQuery,
  UserReviewPreviewResponseEdge,
} from '@/generated/graphql';
import { RefObject, useEffect, useState, useCallback } from 'react';
import { FindUserReviewsWhereArgs } from '@/interfaces/user-review.interfaces';
import { SortOrder } from '@/types/sort.types';
import { useInfiniteScroll } from './use-infinite-scroll';

interface UseInfiniteThreadAndReviewFeedProps {
  ref: RefObject<HTMLDivElement>;
  where?: FindThreadPreviewsWhereInput & FindUserReviewsWhereArgs;
  orderBy?: { createdAt?: SortOrder };
  keyword?: string;
  distinct?: boolean;
  take: number;
}

export const useInfiniteThreadAndReviewFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: UseInfiniteThreadAndReviewFeedProps) => {
  const [items, setItems] = useState<
    (ThreadPreviewResponseEdge | UserReviewPreviewResponseEdge)[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [threadCursor, setThreadCursor] = useState<string | null | undefined>(
    null,
  );
  const [reviewCursor, setReviewCursor] = useState<string | null | undefined>(
    null,
  );

  const threadWhere: FindThreadPreviewsWhereInput = {
    groupId: where?.groupId,
    categoryId: where?.categoryId,
    pending: where?.pending,
    userId: where?.userId,
  };
  const reviewWhere: FindUserReviewsWhereArgs = {
    groupId: where?.groupId,
    userId: where?.userId,
    tagType: where?.tagType,
    reviewedUserId: where?.reviewedUserId,
    status: where?.status,
  };

  const {
    data: threadData,
    loading: threadLoading,
    fetchMore: fetchMoreThreads,
  } = useFindThreadPreviewsQuery({
    variables: {
      where: threadWhere,
      orderBy,
      keyword,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  const {
    data: reviewData,
    loading: reviewLoading,
    fetchMore: fetchMoreReviews,
  } = useFindUserReviewPreviewsQuery({
    variables: {
      where: reviewWhere,
      orderBy,
      keyword,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  const combineAndSortData = useCallback(
    (
      threads: ThreadPreviewResponseEdge[],
      reviews: UserReviewPreviewResponseEdge[],
    ) => {
      const combinedData = [...threads, ...reviews].sort((a, b) =>
        orderBy?.createdAt === 'asc'
          ? new Date(a.node.createdAt).getTime() -
            new Date(b.node.createdAt).getTime()
          : new Date(b.node.createdAt).getTime() -
            new Date(a.node.createdAt).getTime(),
      );

      setItems((prevItems) => [...prevItems, ...combinedData.slice(0, take)]);

      const lastThread = combinedData.findLast(
        (d) => d.__typename === 'ThreadPreviewResponseEdge',
      );
      const lastReview = combinedData.findLast(
        (d) => d.__typename === 'UserReviewPreviewResponseEdge',
      );

      setThreadCursor(lastThread?.cursor || threadCursor);
      setReviewCursor(lastReview?.cursor || reviewCursor);
      setHasNextPage(
        !!threadData?.findThreadPreviews.pageInfo.hasNextPage ||
          !!reviewData?.findUserReviewPreviews.pageInfo.hasNextPage,
      );
    },
    [
      threadCursor,
      reviewCursor,
      threadData?.findThreadPreviews.pageInfo.hasNextPage,
      reviewData?.findUserReviewPreviews.pageInfo.hasNextPage,
      orderBy?.createdAt,
      take,
    ],
  );

  useEffect(() => {
    if (loading && !threadLoading && !reviewLoading) {
      combineAndSortData(
        threadData ? threadData.findThreadPreviews.edges : [],
        reviewData ? reviewData.findUserReviewPreviews.edges : [],
      );
      setLoading(false);
    }
  }, [
    loading,
    threadLoading,
    reviewLoading,
    threadData,
    reviewData,
    combineAndSortData,
  ]);

  const fetchMore = async () => {
    const [moreThreads, moreReviews] = await Promise.all([
      fetchMoreThreads({
        variables: {
          where: threadWhere,
          orderBy,
          keyword,
          cursor: threadCursor,
          take,
          skip: 1,
        },
      }),
      fetchMoreReviews({
        variables: {
          where: reviewWhere,
          orderBy,
          keyword,
          cursor: reviewCursor,
          take,
          skip: 1,
        },
      }),
    ]);

    combineAndSortData(
      moreThreads.data.findThreadPreviews.edges,
      moreReviews.data.findUserReviewPreviews.edges,
    );
  };

  useInfiniteScroll(ref, fetchMore, hasNextPage);

  return { loading, items };
};
