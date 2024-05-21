'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import { AuctionStatus } from '@/lib/auction/auction.types';
import AuctionPreviewPrice from './auction-preview-price';

interface Props {
  auction: AuctionPreviewResponse;
}

export default function AuctionPreviewFooter({ auction }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <AuctionPreviewPrice
        auctionStatus={auction.status as AuctionStatus}
        currentBidPrice={auction.currentBidPrice}
        hammerPrice={auction.hammerPrice}
      />
    </div>
  );
}
