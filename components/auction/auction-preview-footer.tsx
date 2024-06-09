'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import { getAuctionStatusFromExtendedEndDate } from '@/lib/auction/get-auction-status-from-extended-end-date';
import AuctionPreviewPrice from './auction-preview-price';
import AuctionCountdown from './auction-count-down';
import AuctionPreviewStatusLabel from './auction-preview-status-label';

interface Props {
  auction: AuctionPreviewResponse;
}

export default function AuctionPreviewFooter({ auction }: Props) {
  const status = getAuctionStatusFromExtendedEndDate(auction.extendedEndDate);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex flex-row gap-2 text-xs md:text-sm text-gray-200">
        {status === 'closed' && (
          <AuctionPreviewStatusLabel auctionStatus={status} />
        )}
        <AuctionCountdown
          targetDate={auction.extendedEndDate}
          displayLabel={false}
        />
      </div>
      <AuctionPreviewPrice
        auctionStatus={status}
        currentBidPrice={auction.currentBidPrice!}
        hammerPrice={auction.hammerPrice}
      />
    </div>
  );
}
