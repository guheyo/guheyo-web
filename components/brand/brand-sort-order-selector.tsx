'use client';

import { BRAND_SORT_ORDER_OPTIONS } from '@/lib/brand/brand.constants';
import QuerySelector from '../selectors/query-selector';

export default function BrandSortOrderSelector() {
  return (
    <QuerySelector
      queryKey="sort"
      defaultValue="follower"
      options={BRAND_SORT_ORDER_OPTIONS}
      inputClassName=""
    />
  );
}
