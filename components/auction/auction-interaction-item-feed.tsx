'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import {
  AuctionInteractionItemResponse,
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
import { AuthContext } from '../auth/auth.provider';
import BidOutput from '../bid/bid-output';
import CommentCard from '../comments/comment-card';
import BidInput from '../bid/bid-input';
import { cancelReaction } from '@/lib/api/reaction';

export default function AuctionInteractionItemFeed({
  where,
  orderBy,
}: {
  where: FindAuctionInteractionItemsWhereArgs;
  orderBy: FindAuctionInteractionItemsOrderByArgs;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [auctionInteractionItems, setAuctionInteractionItems] = useState<
    AuctionInteractionItemResponse[]
  >([]); // State to store bids
  const [currentBidPrice, setCurrentBidPrice] = useState(0);

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

  const { loading: userLoading, data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });

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

  if (auctionInteractionItemsLoading || userLoading) return <div />;

  const user = UserData?.findAuthor;

  return (
    <div className="flex flex-col relative pb-16 lg:pb-32">
      <div className="flex-1 flex flex-col gap-6">
        {auctionInteractionItems.map((auctionInteractionItem) => {
          if (auctionInteractionItem.__typename === 'BidResponse') {
            return (
              <BidOutput
                key={auctionInteractionItem.id}
                user={auctionInteractionItem.user}
                isCurrentUser={
                  jwtPayload?.id === auctionInteractionItem.user.id
                }
                displayMenu
                bidId={auctionInteractionItem.id}
                createdAt={auctionInteractionItem.createdAt}
                canceledAt={auctionInteractionItem.canceledAt}
                price={auctionInteractionItem.price}
                handleMenuClick={handleCancelBid}
              />
            );
          }
          if (
            auctionInteractionItem.__typename === 'CommentWithAuthorResponse'
          ) {
            return (
              <CommentCard
                key={auctionInteractionItem.id}
                user={auctionInteractionItem.user}
                isCurrentUser={
                  jwtPayload?.id === auctionInteractionItem.user.id
                }
                postId={auctionInteractionItem.postId}
                displayMenu
                defaultMode="read"
                commentId={auctionInteractionItem.id}
                content={auctionInteractionItem.content}
                createdAt={auctionInteractionItem.createdAt}
                updatedAt={auctionInteractionItem.updatedAt}
                commentReactions={auctionInteractionItem.reactions}
                textFieldProps={{
                  multiline: true,
                  placeholder: '메시지 보내기',
                  minRows: 1,
                  size: 'small',
                }}
                handleWrite={handleWrite}
                handleEdit={handleEdit}
              />
            );
          }
          return <div key={auctionInteractionItem.id} />;
        })}
        <div ref={sentinelRef} />
      </div>
      <div className="fixed bottom-0 w-full max-w-2xl mx-auto bg-dark-500 py-6 md:py-10">
        {/* <BidInput
          user={user || undefined}
          currentBidPrice={currentBidPrice}
          handlePlaceBid={handlePlaceBid}
        /> */}
        <CommentCard
          user={user || undefined}
          isCurrentUser
          displayMenu
          defaultMode="create"
          commentReactions={[]}
          textFieldProps={{
            multiline: true,
            placeholder: '메시지 보내기',
            minRows: 1,
            size: 'small',
          }}
          handleWrite={handleWrite}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}
