'use client';

import PeriodSelector from '../selectors/period-selector';
import UserReviewSelector from './user-review-selector';

export default function UserReviewSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <UserReviewSelector />
      <PeriodSelector />
    </div>
  );
}
