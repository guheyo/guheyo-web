'use client';

import { AUCTION_INTERACTION_ITEM_SORT_OPTIONS } from '@/lib/auction/auction.constants';
import QuerySelector from '../selectors/query-selector';

export default function AuctionInteractionItemsSelector() {
  return (
    <QuerySelector
      queryKey="sort"
      defaultValue="newest"
      options={AUCTION_INTERACTION_ITEM_SORT_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-base w-16 md:w-20"
    />
  );
}
