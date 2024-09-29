'use client';

import { OFFER_STATUS_OPTIONS } from '@/lib/offer/offer.constants';
import QuerySelector from '../selectors/query-selector';

export default function OfferStatusSelector() {
  return (
    <QuerySelector
      queryKey="status"
      defaultValue="all"
      options={OFFER_STATUS_OPTIONS}
      inputClassName=""
    />
  );
}
