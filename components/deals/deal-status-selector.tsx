'use client';

import QuerySelector from '../selectors/query-selector';
import { DEAL_STATUS_OPTIONS } from './deal.constants';

export default function DealStatusSelector() {
  return (
    <QuerySelector
      queryKey="status"
      defaultValue="OPEN"
      options={DEAL_STATUS_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-base w-16 md:w-20"
    />
  );
}
