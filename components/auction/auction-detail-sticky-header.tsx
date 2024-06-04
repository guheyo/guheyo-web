'use client';

import { AuctionResponse } from '@/generated/graphql';
import { AuctionStatus } from '@/lib/auction/auction.types';
import AuctionDetailPrice from './auction-detail-price';
import AuctionCountdown from './auction-count-down';
import AuctionBidCount from './auction-bid-count';
import AuctionCommentCount from './auction-comment-count';

export default function AuctionDetailStickyHeader({
  auction,
  currentBidPrice,
  bidCount,
  commentCount,
}: {
  auction: AuctionResponse;
  currentBidPrice: number;
  bidCount: number;
  commentCount: number;
}) {
  return (
    <div className="sticky top-12 z-50 flex flex-row justify-between items-center bg-star-500 text-gray-200 rounded-lg py-3 px-6 mx-4 md:mx-0 text-sm md:text-base">
      <AuctionCountdown targetDate={auction.extendedEndDate} />
      <AuctionDetailPrice
        auctionStatus={auction.status as AuctionStatus}
        currentBidPrice={currentBidPrice}
      />
      <div className="hidden md:flex">
        <AuctionBidCount bidCount={bidCount} />
      </div>
      <div className="hidden md:flex">
        <AuctionCommentCount commentCount={commentCount} />
      </div>
    </div>
  );
}
