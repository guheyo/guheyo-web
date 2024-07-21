'use client';

import { AUCTION_SORT_ORDER_OPTIONS } from '@/lib/auction/auction.constants';
import QuerySelector from '../selectors/query-selector';

export default function AuctionSortOrderSelector() {
  return (
    <QuerySelector
      queryKey="sort"
      defaultValue="ending"
      options={AUCTION_SORT_ORDER_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-sm"
    />
  );
}
