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
import { max } from 'lodash';
import { getNewEdges } from '@/lib/feed/get-new-edges';
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
      categoryType: where?.categoryType,
      pending: where?.pending,
      userId: where?.userId,
      tagNames: where?.tagNames,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      where?.groupId,
      where?.categoryId,
      where?.categoryType,
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

  const memoOrderBy = useMemo(
    () => ({
      createdAt: orderBy?.createdAt,
    }),
    [orderBy?.createdAt],
  );

  const {
    data: threadData,
    loading: threadLoading,
    fetchMore: fetchMoreThreads,
  } = useFindThreadPreviewsQuery({
    variables: {
      where: threadWhere,
      orderBy: memoOrderBy,
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
    loading: reviewLoading,
    fetchMore: fetchMoreReviews,
  } = useFindUserReviewPreviewsQuery({
    variables: {
      where: reviewWhere,
      orderBy: memoOrderBy,
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
      let combinedData = [...threads, ...reviews].sort((a, b) =>
        memoOrderBy?.createdAt === 'asc'
          ? new Date(a.node.createdAt).getTime() -
            new Date(b.node.createdAt).getTime()
          : new Date(b.node.createdAt).getTime() -
            new Date(a.node.createdAt).getTime(),
      );
      combinedData = append
        ? combinedData.slice(0, take)
        : combinedData.slice(0, max([take, combinedData.length - take]));

      setItems((prevItems) => [...prevItems, ...combinedData]);

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
      memoOrderBy,
      take,
    ],
  );

  useEffect(() => {
    if (!threadLoading && !reviewLoading && items.length === 0) {
      combineAndSortData(
        threadData?.findThreadPreviews.edges || [],
        reviewData?.findUserReviewPreviews.edges || [],
        false,
      );
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadLoading, reviewLoading, combineAndSortData]);

  const fetchMore = useCallback(async () => {
    let moreThreads;
    let moreReviews;
    if (type !== 'review') {
      moreThreads = await fetchMoreThreads({
        variables: {
          where: threadWhere,
          orderBy: memoOrderBy,
          keyword,
          target,
          cursor: threadCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;

          const newEdges = getNewEdges({
            previousEdges: previousQueryResult.findThreadPreviews.edges,
            fetchMoreEdges: fetchMoreResult.findThreadPreviews.edges,
            cursor: threadCursor,
          });

          return {
            findThreadPreviews: {
              __typename: previousQueryResult.findThreadPreviews.__typename,
              edges: [
                ...previousQueryResult.findThreadPreviews.edges,
                ...newEdges,
              ],
              pageInfo: fetchMoreResult.findThreadPreviews.pageInfo,
            },
          };
        },
      });
    }

    if (type !== 'thread') {
      moreReviews = await fetchMoreReviews({
        variables: {
          where: reviewWhere,
          orderBy: memoOrderBy,
          keyword,
          target,
          cursor: reviewCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;

          const newEdges = getNewEdges({
            previousEdges: previousQueryResult.findUserReviewPreviews.edges,
            fetchMoreEdges: fetchMoreResult.findUserReviewPreviews.edges,
            cursor: reviewCursor,
          });

          return {
            findUserReviewPreviews: {
              __typename: previousQueryResult.findUserReviewPreviews.__typename,
              edges: [
                ...previousQueryResult.findUserReviewPreviews.edges,
                ...newEdges,
              ],
              pageInfo: fetchMoreResult.findUserReviewPreviews.pageInfo,
            },
          };
        },
      });
    }

    combineAndSortData(
      moreThreads ? moreThreads.data.findThreadPreviews.edges : [],
      moreReviews ? moreReviews.data.findUserReviewPreviews.edges : [],
      true,
    );
  }, [
    fetchMoreThreads,
    fetchMoreReviews,
    threadWhere,
    reviewWhere,
    memoOrderBy,
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
