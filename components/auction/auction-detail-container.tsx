'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import {
  AuctionInteractionItemResponse,
  AuctionResponse,
  BidCanceledDocument,
  BidPlacedDocument,
  BidResponse,
  CommentCreatedDocument,
  CommentUpdatedDocument,
  ReactionCanceledDocument,
  ReactionCreatedDocument,
  useFindAuthorQuery,
} from '@/generated/graphql';
import { cancelBid, placeBid } from '@/lib/api/bid';
import { BidValues } from '@/lib/bid/bid.types';
import { useSubscription } from '@apollo/client';
import { useInfiniteAuctionInteractionItems } from '@/hooks/use-infinite-auction-interaction-items';
import { createComment, updateComment } from '@/lib/api/comment';
import { CommentValues } from '@/lib/comment/comment.types';
import {
  FindAuctionInteractionItemsOrderByArgs,
  FindAuctionInteractionItemsWhereArgs,
} from '@/lib/auction/auction.interfaces';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { AuthContext } from '../auth/auth.provider';
import AuctionDetail from './auction-detail';
import ReportFeed from '../reports/report-feed';
import AuctionDetailAddons from './auction-detail-addons';
import AuctionInteractionItemsSelector from './auction-interaction-items-selector';
import AuctionInteractionItemFeed from './auction-interaction-item-feed';

export default function AuctionDetailContainer({
  auction,
}: {
  auction: AuctionResponse;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [auctionInteractionItems, setAuctionInteractionItems] = useState<
    AuctionInteractionItemResponse[]
  >([]); // State to store bids
  const [currentBidPrice, setCurrentBidPrice] = useState(0);

  const reportWhere: FindReportPreviewsWhereArgs = {
    type: 'post',
    refId: auction.post.id,
  };

  const reportOrderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  const where: FindAuctionInteractionItemsWhereArgs = {
    auctionId: auction.id,
    postId: auction.post.id,
    view: 'newest',
  };
  const orderBy: FindAuctionInteractionItemsOrderByArgs = {
    createdAt: 'desc',
  };

  const handlePlaceBid = async (values: BidValues) => {
    if (!jwtPayload || !where.auctionId || !values.price) return;

    await placeBid({
      id: values.id,
      auctionId: where.auctionId,
      price: values.price,
      priceCurrency: 'krw',
    });
  };

  const handleCancelBid = async (bidId: string) => {
    if (!jwtPayload || !where.auctionId) return;

    await cancelBid({
      auctionId: where.auctionId,
      bidId,
    });
  };

  const handleWrite = async (values: CommentValues) => {
    if (!jwtPayload || !where.postId || !values.content) return;

    await createComment({
      id: values.id,
      content: values.content,
      postId: where.postId,
    });
  };

  const handleEdit = async (values: CommentValues) => {
    if (!values.content) return;

    await updateComment({
      id: values.id,
      content: values.content,
    });
  };

  const {
    loading: auctionInteractionItemsLoading,
    data: auctionInteractionItemsData,
  } = useInfiniteAuctionInteractionItems({
    ref: sentinelRef,
    where,
    orderBy,
    take: 10,
  });

  const { data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });
  const user = UserData?.findAuthor;

  // Load bids if not loading and bids data is available
  useEffect(() => {
    if (
      !auctionInteractionItemsLoading &&
      auctionInteractionItemsData?.findAuctionInteractionItems
    ) {
      setAuctionInteractionItems(
        auctionInteractionItemsData.findAuctionInteractionItems.edges.map(
          (edge) => edge.node,
        ),
      );
    }
  }, [auctionInteractionItemsLoading, auctionInteractionItemsData]);

  useEffect(() => {
    const lastBid = auctionInteractionItems.find(
      (interactionItem) =>
        interactionItem.__typename === 'BidResponse' &&
        interactionItem.canceledAt === null,
    ) as BidResponse | null;
    if (lastBid) {
      setCurrentBidPrice(lastBid.price);
    }
  }, [auctionInteractionItems]);

  useSubscription(BidPlacedDocument, {
    variables: {
      auctionId: where.auctionId,
    },
    onData: ({ data }) => {
      const newBid = data.data.bidPlaced;
      setAuctionInteractionItems([newBid, ...auctionInteractionItems]);
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(BidCanceledDocument, {
    variables: {
      auctionId: where.auctionId,
    },
    onData: ({ data }) => {
      const canceledBid = data.data.bidCanceled;
      setAuctionInteractionItems(
        auctionInteractionItems.map((auctionInteractionItem) => {
          if (auctionInteractionItem.id !== canceledBid.id)
            return auctionInteractionItem;
          return {
            ...auctionInteractionItem,
            canceledAt: canceledBid.canceledAt,
          };
        }),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentCreatedDocument, {
    variables: {
      postId: where.postId,
    },
    onData: ({ data }) => {
      const newComment = data.data.commentCreated;
      setAuctionInteractionItems([newComment, ...auctionInteractionItems]);
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentUpdatedDocument, {
    variables: {
      postId: where.postId,
    },
    onData: ({ data }) => {
      const updatedComment = data.data.commentUpdated;
      setAuctionInteractionItems(
        auctionInteractionItems.map((interactionItem) => {
          if (interactionItem.id === updatedComment.id)
            return {
              ...interactionItem,
              updatedAt: updatedComment.updatedAt,
              content: updatedComment.content,
            };
          return interactionItem;
        }),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(ReactionCreatedDocument, {
    variables: {
      type: 'comment',
      postId: where.postId,
    },
    onData: ({ data }) => {
      const newReaction = data.data.reactionCreated;
      setAuctionInteractionItems(
        auctionInteractionItems.map((interactionItem) => {
          if (
            interactionItem.__typename === 'CommentWithAuthorResponse' &&
            interactionItem.id === newReaction.commentId
          ) {
            return {
              ...interactionItem,
              reactions: [...interactionItem.reactions, newReaction],
            };
          }
          return interactionItem;
        }),
      );
    },
    shouldResubscribe: true,
  });

  useSubscription(ReactionCanceledDocument, {
    variables: {
      type: 'comment',
      postId: where.postId,
    },
    onData: ({ data }) => {
      const canceledReaction = data.data.reactionCanceled;
      setAuctionInteractionItems(
        auctionInteractionItems.map((interactionItem) => {
          if (
            interactionItem.__typename === 'CommentWithAuthorResponse' &&
            interactionItem.id === canceledReaction.commentId
          ) {
            return {
              ...interactionItem,
              reactions: interactionItem.reactions.filter(
                (reaction) => reaction.id !== canceledReaction.id,
              ),
            };
          }
          return interactionItem;
        }),
      );
    },
    shouldResubscribe: true,
  });

  if (auctionInteractionItemsLoading) return <div />;

  return (
    <div className="flex flex-col gap-6 md:gap-6">
      <AuctionDetail auction={auction} />
      {auction.post.reportCount > 0 && (
        <div className="flex flex-col gap-2 pt-14">
          <div
            id="report"
            className="text-base md:text-lg text-gray-300 font-bold px-4 md:px-0"
          >
            신고 {auction.post.reportCount}개
          </div>
          <div className="px-2 md:px-0">
            <ReportFeed where={reportWhere} orderBy={reportOrderBy} />
          </div>
        </div>
      )}
      <div className="pt-14 px-4 md:px-0 flex flex-row justify-between items-center text-base md:text-lg text-gray-300 font-bold">
        <AuctionDetailAddons
          bidCount={
            auctionInteractionItems.filter(
              (interactionItem) => interactionItem.__typename === 'BidResponse',
            ).length
          }
          commentCount={
            auctionInteractionItems.filter(
              (interactionItem) =>
                interactionItem.__typename === 'CommentWithAuthorResponse',
            ).length
          }
        />
        <AuctionInteractionItemsSelector />
      </div>
      <div className="px-4 md:px-0">
        <AuctionInteractionItemFeed
          auctionInteractionItems={auctionInteractionItems}
          currentBidPrice={currentBidPrice}
          handlePlaceBid={handlePlaceBid}
          handleCancelBid={handleCancelBid}
          handleWrite={handleWrite}
          handleEdit={handleEdit}
          user={user || undefined}
          sentinelRef={sentinelRef}
        />
      </div>
    </div>
  );
}
