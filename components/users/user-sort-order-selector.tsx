'use client';

import { USER_SORT_ORDER_OPTIONS } from '@/lib/user/user.constants';
import QuerySelector from '../selectors/query-selector';

export default function UserSortOrderSelector() {
  return (
    <QuerySelector
      queryKey="sort"
      defaultValue="username"
      options={USER_SORT_ORDER_OPTIONS}
      inputClassName=""
    />
  );
}
