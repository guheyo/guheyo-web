'use client';

import { AuctionResponse } from '@/generated/graphql';
import { AuctionStatus } from '@/lib/auction/auction.types';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import AuctionDetailPrice from './auction-detail-price';
import AuctionCountdown from './auction-count-down';
import AuctionBidCount from './auction-bid-count';
import AuctionCommentCount from './auction-comment-count';
import ToggleAuctionInteractionItem from './toggle-auction-interaction-item';

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
  const device = useDeviceDetect();

  return (
    <div className="sticky top-12 z-50 flex flex-row items-center gap-2 mx-2 md:mx-0 bg-dark-500">
      <div className="flex flex-row flex-grow justify-between items-center bg-star-500 text-gray-200 rounded-lg py-2 md:py-3 px-4 md:px-3 text-sm md:text-base">
        <AuctionCountdown
          targetDate={auction.extendedEndDate}
          displayLabel={device !== 'mobile'}
        />
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
      <div className="flex flex-row justify-between items-center bg-gray-500 text-gray-200 rounded-lg py-2 md:py-3 px-2 md:px-3 text-sm md:text-base">
        <ToggleAuctionInteractionItem />
      </div>
    </div>
  );
}
