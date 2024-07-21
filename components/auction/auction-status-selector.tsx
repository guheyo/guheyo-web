'use client';

import { AUCTION_STATUS_OPTIONS } from '@/lib/auction/auction.constants';
import QuerySelector from '../selectors/query-selector';

export default function AuctionStatusSelector() {
  return (
    <QuerySelector
      queryKey="status"
      defaultValue="all"
      options={AUCTION_STATUS_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-sm"
    />
  );
}
