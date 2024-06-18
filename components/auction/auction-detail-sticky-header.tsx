'use client';

import { useContext } from 'react';
import { AuctionStatus } from '@/lib/auction/auction.types';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { AUCTION_CLOSED } from '@/lib/auction/auction.constants';
import { BidResponse } from '@/generated/graphql';
import { AuthContext } from '../auth/auth.provider';
import AuctionDetailPrice from './auction-detail-price';
import AuctionCountdown from './auction-count-down';
import AuctionBidCount from './auction-bid-count';
import AuctionCommentCount from './auction-comment-count';
import ToggleAuctionInteractionItem from './toggle-auction-interaction-item';

export default function AuctionDetailStickyHeader({
  status,
  extendedEndDate,
  highestBid,
  bidCount,
  commentCount,
  userId,
}: {
  status: AuctionStatus;
  extendedEndDate: Date;
  highestBid?: BidResponse;
  bidCount: number;
  commentCount: number;
  userId: string;
}) {
  const device = useDeviceDetect();
  const { jwtPayload } = useContext(AuthContext);

  return (
    <div className="sticky top-12 z-50 flex flex-row items-center gap-2 mx-2 md:mx-0 bg-dark-500">
      <div
        className={`flex flex-row flex-grow justify-between items-center text-gray-200 rounded-lg h-10 md:h-12 py-3 md:py-3 px-4 md:px-3 text-sm md:text-base ${
          status === AUCTION_CLOSED ? 'bg-black' : 'bg-star-700'
        }`}
      >
        <AuctionCountdown
          targetDate={extendedEndDate}
          displayLabel={device !== 'mobile'}
          template="YY.MM.DD HH:mm"
        />
        <AuctionDetailPrice auctionStatus={status} highestBid={highestBid} />
        <div className="hidden md:flex">
          <AuctionBidCount bidCount={bidCount} />
        </div>
        <div className="hidden md:flex">
          <AuctionCommentCount commentCount={commentCount} />
        </div>
      </div>
      {/* Show the ToggleAuctionInteractionItem only if the current user is not the seller */}
      {jwtPayload?.id !== userId && (
        <div className="flex flex-row justify-between items-center bg-star-500 text-gray-200 rounded-lg h-10 md:h-12 py-3 md:py-3 px-2 md:px-3 text-sm md:text-base">
          <ToggleAuctionInteractionItem />
        </div>
      )}
    </div>
  );
}
