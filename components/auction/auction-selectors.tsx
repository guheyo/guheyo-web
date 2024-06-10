'use client';

import PeriodSelector from '../selectors/period-selector';
import AuctionSortOrderSelector from './auction-sort-order-selector';
import AuctionStatusSelector from './auction-status-selector';

export default function AuctionSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <PeriodSelector />
      <AuctionSortOrderSelector />
      <AuctionStatusSelector />
    </div>
  );
}
