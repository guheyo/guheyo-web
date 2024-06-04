'use client';

import React from 'react';
import {
  AuctionInteractionItemResponse,
  AuthorResponse,
} from '@/generated/graphql';
import { BidValues } from '@/lib/bid/bid.types';
import { CommentValues } from '@/lib/comment/comment.types';
import BidOutput from '../bid/bid-output';
import CommentCard from '../comments/comment-card';
import AuctionInteractionItemInput from './auction-interaction-item-input';

export default function AuctionInteractionItemFeed({
  auctionInteractionItems,
  currentBidPrice,
  handlePlaceBid,
  handleCancelBid,
  handleWrite,
  handleEdit,
  user,
  sentinelRef,
}: {
  auctionInteractionItems: AuctionInteractionItemResponse[];
  currentBidPrice: number;
  handlePlaceBid: (values: BidValues) => Promise<void>;
  handleCancelBid: (bidId: string) => Promise<void>;
  handleWrite: (values: CommentValues) => Promise<void>;
  handleEdit: (values: CommentValues) => Promise<void>;
  user?: AuthorResponse;
  sentinelRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="flex flex-col relative pb-16 lg:pb-32">
      <div className="flex-1 flex flex-col gap-6">
        {auctionInteractionItems.map((auctionInteractionItem) => {
          if (auctionInteractionItem.__typename === 'BidResponse') {
            return (
              <BidOutput
                key={auctionInteractionItem.id}
                user={auctionInteractionItem.user}
                isCurrentUser={user?.id === auctionInteractionItem.user.id}
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
                isCurrentUser={user?.id === auctionInteractionItem.user.id}
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
        <AuctionInteractionItemInput
          user={user}
          currentBidPrice={currentBidPrice}
          handlePlaceBid={handlePlaceBid}
          handleWrite={handleWrite}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}
