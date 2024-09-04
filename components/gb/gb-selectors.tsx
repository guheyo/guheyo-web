'use client';

import PeriodSelector from '../selectors/period-selector';

export default function GbSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <PeriodSelector />
    </div>
  );
}
