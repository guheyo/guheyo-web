'use client';

import { MANNER_TAG_TYPE_OPTIONS } from '@/lib/user-review/user-review.constants';
import QuerySelector from '../selectors/query-selector';

export default function UserReviewSelector() {
  return (
    <QuerySelector
      queryKey="tagType"
      defaultValue="all"
      options={MANNER_TAG_TYPE_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-sm"
    />
  );
}
