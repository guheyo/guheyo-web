'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import { AuctionStatus } from '@/lib/auction/auction.types';
import AuctionPreviewPrice from './auction-preview-price';
import AuctionCountdown from './auction-count-down';

interface Props {
  auction: AuctionPreviewResponse;
}

export default function AuctionPreviewFooter({ auction }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="text-xs md:text-sm text-gray-200">
        <AuctionCountdown
          targetDate={auction.extendedEndDate}
          displayLabel={false}
        />
      </div>
      <AuctionPreviewPrice
        auctionStatus={auction.status as AuctionStatus}
        currentBidPrice={auction.currentBidPrice!}
        hammerPrice={auction.hammerPrice}
      />
    </div>
  );
}
