'use client';

import { BidState } from 'prisma';

interface AuctionBidProps {
  bidState: BidState[];
}

export default function AuctionBid({ bidState }: AuctionBidProps) {
  return <div>hello world</div>;
}
