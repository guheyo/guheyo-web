'use client';

import React from 'react';
import BidInput from '@/components/bid/bid-input';
import CommentCard from '@/components/comments/comment-card';
import { AuthorResponse } from '@/generated/graphql';
import { useBidInput } from '../../lib/bid/use-bid-input';
import { BidValues } from '../../lib/bid/bid.types';
import { CommentValues } from '../../lib/comment/comment.types';

export default function AuctionInteractionItemInput({
  user,
  currentBidPrice,
  isSeller,
  handlePlaceBid,
  handleWrite,
  handleEdit,
}: {
  user?: AuthorResponse;
  currentBidPrice: number;
  isSeller: boolean;
  handlePlaceBid: (values: BidValues) => Promise<void>;
  handleWrite: (values: CommentValues) => Promise<void>;
  handleEdit: (values: CommentValues) => Promise<void>;
}) {
  const { isBidMode } = useBidInput(!isSeller);

  return (
    <div>
      {isBidMode ? (
        <BidInput
          user={user}
          currentBidPrice={currentBidPrice}
          handlePlaceBid={handlePlaceBid}
        />
      ) : (
        <CommentCard
          user={user}
          isCurrentUser
          displayMenu
          defaultMode="create"
          images={[]}
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
      )}
    </div>
  );
}
