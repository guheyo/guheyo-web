'use client';

import { ReactNode } from 'react';
import { AUCTION_STATUS_OPTIONS } from '@/lib/auction/auction.constants';
import AuctionStatusNavbar from './auction-status-navbar';

interface Props {
  children: ReactNode;
}

function PrivateUserAuctionFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-start pb-4">
        <AuctionStatusNavbar options={AUCTION_STATUS_OPTIONS} />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default PrivateUserAuctionFeedLayout;
