import {
  FindThreadPreviewsWhereInput,
  FindUserReviewPreviewsWhereInput,
  ThreadPreviewResponseEdge,
  useFindThreadPreviewsQuery,
  useFindUserReviewPreviewsQuery,
  UserReviewPreviewResponseEdge,
} from '@/generated/graphql';
import { RefObject, useEffect, useState, useCallback, useMemo } from 'react';
import { SortOrder } from '@/types/sort.types';
import { useInfiniteScroll } from './use-infinite-scroll';

interface UseInfiniteThreadAndReviewFeedProps {
  ref: RefObject<HTMLDivElement>;
  type?: 'thread' | 'review';
  where?: FindThreadPreviewsWhereInput & FindUserReviewPreviewsWhereInput;
  orderBy?: { createdAt?: SortOrder };
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
}

export const useInfiniteThreadAndReviewFeed = ({
  ref,
  type,
  where,
  orderBy,
  keyword,
  target,
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

  const threadWhere: FindThreadPreviewsWhereInput = useMemo(
    () => ({
      groupId: where?.groupId,
      categoryId: where?.categoryId,
      pending: where?.pending,
      userId: where?.userId,
      tagNames: where?.tagNames,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      where?.groupId,
      where?.categoryId,
      where?.pending,
      where?.userId,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      where?.tagNames?.join(','),
    ],
  );

  const reviewWhere: FindUserReviewPreviewsWhereInput = useMemo(
    () => ({
      groupId: where?.groupId,
      userId: where?.userId,
      tagType: where?.tagType,
      reviewedUserId: where?.reviewedUserId,
    }),
    [where?.groupId, where?.userId, where?.tagType, where?.reviewedUserId],
  );

  const {
    data: threadData,
    fetchMore: fetchMoreThreads,
    refetch: refetchThreads,
  } = useFindThreadPreviewsQuery({
    variables: {
      where: threadWhere,
      orderBy,
      keyword,
      target,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
    skip: type === 'review',
  });

  const {
    data: reviewData,
    fetchMore: fetchMoreReviews,
    refetch: refetchReviews,
  } = useFindUserReviewPreviewsQuery({
    variables: {
      where: reviewWhere,
      orderBy,
      keyword,
      target,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
    skip: type === 'thread',
  });

  const combineAndSortData = useCallback(
    (
      threads: ThreadPreviewResponseEdge[],
      reviews: UserReviewPreviewResponseEdge[],
      append: boolean,
    ) => {
      const combinedData = [...threads, ...reviews].sort((a, b) =>
        orderBy?.createdAt === 'asc'
          ? new Date(a.node.createdAt).getTime() -
            new Date(b.node.createdAt).getTime()
          : new Date(b.node.createdAt).getTime() -
            new Date(a.node.createdAt).getTime(),
      );

      setItems((prevItems) =>
        append
          ? [...prevItems, ...combinedData.slice(0, take)]
          : combinedData.slice(0, take),
      );

      const lastThread = combinedData.findLast(
        (d) => d.__typename === 'ThreadPreviewResponseEdge',
      );
      const lastReview = combinedData.findLast(
        (d) => d.__typename === 'UserReviewPreviewResponseEdge',
      );

      setThreadCursor((prevCursor) => lastThread?.cursor || prevCursor);
      setReviewCursor((prevCursor) => lastReview?.cursor || prevCursor);
      setHasNextPage(
        !!threadData?.findThreadPreviews.pageInfo.hasNextPage ||
          lastThread?.cursor !== threadCursor ||
          !!reviewData?.findUserReviewPreviews.pageInfo.hasNextPage ||
          lastReview?.cursor !== reviewCursor,
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
    setItems([]);
    setThreadCursor(null);
    setReviewCursor(null);
    setLoading(true);

    if (type === 'thread') {
      refetchThreads({
        where: threadWhere,
        orderBy,
        keyword,
        target,
        take,
        skip: 0,
      }).then((result) => {
        combineAndSortData(
          result.data?.findThreadPreviews.edges || [],
          [],
          false,
        );
        setLoading(false);
      });
    } else if (type === 'review') {
      refetchReviews({
        where: reviewWhere,
        orderBy,
        keyword,
        target,
        take,
        skip: 0,
      }).then((result) => {
        combineAndSortData(
          [],
          result.data?.findUserReviewPreviews.edges || [],
          false,
        );
        setLoading(false);
      });
    } else {
      refetchThreads({
        where: threadWhere,
        orderBy,
        keyword,
        target,
        take,
        skip: 0,
      }).then((threadResult) => {
        refetchReviews({
          where: reviewWhere,
          orderBy,
          keyword,
          target,
          take,
          skip: 0,
        }).then((reviewResult) => {
          combineAndSortData(
            threadResult.data.findThreadPreviews.edges || [],
            reviewResult.data?.findUserReviewPreviews.edges || [],
            false,
          );
          setLoading(false);
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadWhere, reviewWhere, orderBy?.createdAt, type, keyword, target]);

  const fetchMore = useCallback(async () => {
    let moreThreads;
    let moreReviews;
    if (type !== 'review') {
      moreThreads = await fetchMoreThreads({
        variables: {
          where: threadWhere,
          orderBy,
          keyword,
          target,
          cursor: threadCursor,
          take,
          skip: 1,
        },
      });
    }

    if (type !== 'thread') {
      moreReviews = await fetchMoreReviews({
        variables: {
          where: reviewWhere,
          orderBy,
          keyword,
          target,
          cursor: reviewCursor,
          take,
          skip: 1,
        },
      });
    }

    combineAndSortData(
      moreThreads ? moreThreads.data.findThreadPreviews.edges : [],
      moreReviews ? moreReviews.data.findUserReviewPreviews.edges : [],
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fetchMoreThreads,
    fetchMoreReviews,
    threadWhere,
    reviewWhere,
    orderBy?.createdAt,
    keyword,
    target,
    threadCursor,
    reviewCursor,
    combineAndSortData,
    type,
    take,
  ]);

  useInfiniteScroll(ref, fetchMore, hasNextPage);

  return { loading, items };
};
