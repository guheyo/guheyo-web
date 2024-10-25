'use client';

import { useContext, useEffect, useState } from 'react';
import {
  AuctionInteractionItemResponse,
  AuctionResponse,
  AuctionUpdatedDocument,
  BidCanceledDocument,
  BidPlacedDocument,
  BidResponse,
  CommentCreatedDocument,
  CommentDeletedDocument,
  CommentUpdatedDocument,
  FindAuctionInteractionItemsOrderByInput,
  FindAuctionInteractionItemsWhereInput,
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
  ReactionCanceledDocument,
  ReactionCreatedDocument,
  useFindAuthorQuery,
} from '@/generated/graphql';
import { cancelBid, placeBid } from '@/lib/api/bid';
import { BidValues } from '@/lib/bid/bid.types';
import { useSubscription } from '@apollo/client';
import { useInfiniteAuctionInteractionItems } from '@/hooks/use-infinite-auction-interaction-items';
import { createComment, deleteComment, updateComment } from '@/lib/api/comment';
import { CommentValues } from '@/lib/comment/comment.types';
import { useSearchParams } from 'next/navigation';
import { parseAuctionAlertMessage } from '@/lib/auction/parse-auction-alert-message';
import { AuthContext } from '../auth/auth.provider';
import AuctionDetail from './auction-detail';
import ReportFeed from '../reports/report-feed';
import AuctionDetailAddons from './auction-detail-addons';
import AuctionInteractionItemsSelector from './auction-interaction-items-selector';
import AuctionInteractionItemFeed from './auction-interaction-item-feed';
import DeleteConfirmationDialog from '../base/delete-confirmation-dialog';
import PinnedComments from '../comments/pinned-comments';
import BgDialog from '../base/bg-dialog';

export default function AuctionDetailContainer({
  auction: initialAuction,
}: {
  auction: AuctionResponse;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [auction, setAuction] = useState<AuctionResponse>(initialAuction);
  const [auctionInteractionItems, setAuctionInteractionItems] = useState<
    AuctionInteractionItemResponse[]
  >([]);
  const highestBid: BidResponse | undefined = auctionInteractionItems.filter(
    (auctionInteractionItem): auctionInteractionItem is BidResponse =>
      auctionInteractionItem.__typename === 'BidResponse' &&
      auctionInteractionItem.canceledAt === null,
  )[0];

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<CommentValues | null>(
    null,
  );
  const searchParams = useSearchParams();
  const view = searchParams.get('view') || 'newest';

  const reportWhere: FindReportPreviewsWhereInput = {
    type: 'post',
    refId: auction.post.id,
  };

  const reportOrderBy: FindReportPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  const where: FindAuctionInteractionItemsWhereInput = {
    auctionId: auction.id,
    postId: auction.post.id,
    view,
    userId: view === 'sellerComment' ? auction.post.user.id : undefined,
  };
  const orderBy: FindAuctionInteractionItemsOrderByInput = {
    createdAt: 'desc',
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePlaceBid = async (values: BidValues) => {
    if (!jwtPayload || !values.price) return;

    try {
      await placeBid({
        id: values.id,
        auctionId: auction.id,
        price: values.price,
        priceCurrency: 'krw',
      });
    } catch (e: any) {
      const message = parseAuctionAlertMessage(e.message);
      setAlertMessage(message);
      setOpen(true);
    }
  };

  const handleCancelBid = async (bidId: string) => {
    if (!jwtPayload) return;

    try {
      await cancelBid({
        auctionId: auction.id,
        bidId,
      });
    } catch (e: any) {
      const message = parseAuctionAlertMessage(e.message);
      setAlertMessage(message);
      setOpen(true);
    }
  };

  const handleWrite = async (values: CommentValues) => {
    if (!jwtPayload || !values.content) return;

    await createComment({
      id: values.id,
      content: values.content,
      pinned: values.pinned,
      postId: auction.post.id,
    });
  };

  const handlePin = async (values: CommentValues) => {
    if (!values.content) return;

    await updateComment({
      id: values.id,
      content: values.content,
      pinned: values.pinned,
    });
  };

  const handleDeleteConfirmation = (comment: CommentValues) => {
    setCommentToDelete(comment);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setCommentToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleDelete = async (values: CommentValues) => {
    if (!values.id) return;

    await deleteComment({
      id: values.id,
    });
    handleCloseDeleteDialog();
  };

  const {
    setRef,
    loading: auctionInteractionItemsLoading,
    data: auctionInteractionItemsData,
  } = useInfiniteAuctionInteractionItems({
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

  useSubscription(AuctionUpdatedDocument, {
    variables: {
      auctionId: auction.id,
    },
    onData: ({ data }) => {
      const updatedAuction = data.data.auctionUpdated;
      setAuction({
        ...auction,
        extendedEndDate: updatedAuction.extendedEndDate,
        status: updatedAuction.status,
      });
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(BidPlacedDocument, {
    variables: {
      auctionId: auction.id,
    },
    onData: ({ data }) => {
      const newBid = data.data.bidPlaced;
      setAuctionInteractionItems([newBid, ...auctionInteractionItems]);
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(BidCanceledDocument, {
    variables: {
      auctionId: auction.id,
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
      postId: auction.post.id,
    },
    onData: ({ data }) => {
      const newComment = data.data.commentCreated;
      setAuctionInteractionItems([newComment, ...auctionInteractionItems]);
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentUpdatedDocument, {
    variables: {
      postId: auction.post.id,
    },
    onData: ({ data }) => {
      const updatedComment = data.data.commentUpdated;
      setAuctionInteractionItems(
        auctionInteractionItems.map((interactionItem) => {
          if (
            interactionItem.__typename === 'CommentWithAuthorResponse' &&
            interactionItem.id === updatedComment.id
          ) {
            return {
              ...interactionItem,
              pinned: updatedComment.pinned,
            };
          }
          return interactionItem;
        }),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentDeletedDocument, {
    variables: {
      postId: auction.post.id,
    },
    onData: ({ data }) => {
      const deletedComment = data.data.commentDeleted;
      setAuctionInteractionItems(
        auctionInteractionItems.filter(
          (auctionInteractionItem) =>
            auctionInteractionItem.id !== deletedComment.id,
        ),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(ReactionCreatedDocument, {
    variables: {
      type: 'comment',
      postId: auction.post.id,
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
      postId: auction.post.id,
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

  const bidCount = auctionInteractionItems.filter(
    (interactionItem) => interactionItem.__typename === 'BidResponse',
  ).length;

  const commentCount = auctionInteractionItems.filter(
    (interactionItem) =>
      interactionItem.__typename === 'CommentWithAuthorResponse',
  ).length;

  return (
    <div className="flex flex-col gap-4">
      <AuctionDetail
        auction={auction}
        highestBid={highestBid}
        bidCount={bidCount}
        commentCount={commentCount}
      />
      {auction.post.reportCount > 0 && (
        <div className="flex flex-col gap-2 pt-14">
          <div
            id="report"
            className="text-base md:text-lg text-gray-300 font-bold px-4 md:px-0"
          >
            신고 {auction.post.reportCount}개
          </div>
          <div className="px-2 md:px-0">
            <ReportFeed
              defaultWhere={reportWhere}
              defaultOrderBy={reportOrderBy}
            />
          </div>
        </div>
      )}
      <div className="pt-14 px-4 md:px-0 flex flex-row justify-between items-center text-base md:text-lg text-gray-300 font-bold">
        <AuctionDetailAddons bidCount={bidCount} commentCount={commentCount} />
        <AuctionInteractionItemsSelector />
      </div>
      <div className="px-4 md:px-0">
        <PinnedComments
          postId={auction.post.id}
          authorId={auction.post.user.id}
          take={3}
          editable={false}
          includeAuthorComments
        />
        <AuctionInteractionItemFeed
          auctionInteractionItems={auctionInteractionItems}
          currentBidPrice={highestBid?.price || 0}
          sellerId={auction.post.user.id}
          handlePlaceBid={handlePlaceBid}
          handleCancelBid={handleCancelBid}
          handleWrite={handleWrite}
          handlePin={handlePin}
          handleDelete={handleDeleteConfirmation}
          user={user || undefined}
          sentinelRef={setRef}
        />
      </div>
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        title="댓글 삭제"
        content="댓글을 완전히 삭제할까요?"
        onClose={handleCloseDeleteDialog}
        onConfirm={() => commentToDelete && handleDelete(commentToDelete)}
      />
      <BgDialog
        open={open}
        title="안내"
        content={alertMessage}
        closeButtonName="확인"
        onClose={handleClose}
      />
    </div>
  );
}
