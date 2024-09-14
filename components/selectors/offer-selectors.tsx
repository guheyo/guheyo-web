'use client';

import OfferStatusSelector from '../offers/offer-status-selector';
import PeriodSelector from './period-selector';

export default function OfferSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <OfferStatusSelector />
      <PeriodSelector />
    </div>
  );
}
