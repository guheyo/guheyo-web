'use client';

import DealStatusSelector from '../deals/deal-status-selector';
import DistinctSelector from './distinct-selector';
import PeriodSelector from './period-selector';

export default function DealSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <PeriodSelector />
      <DealStatusSelector />
      <DistinctSelector />
    </div>
  );
}
