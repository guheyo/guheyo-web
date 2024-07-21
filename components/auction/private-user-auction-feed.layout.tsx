'use client';

import { ReactNode } from 'react';
import { AUCTION_STATUS_OPTIONS } from '@/lib/auction/auction.constants';
import AuctionStatusNavbar from './auction-status-navbar';

interface Props {
  children: ReactNode;
}

function PrivateUserAuctionFeedLayout({ children }: Props) {
  return (
    <>
      <div className="pb-4">
        <AuctionStatusNavbar options={AUCTION_STATUS_OPTIONS} />
      </div>
      {children}
    </>
  );
}

export default PrivateUserAuctionFeedLayout;
