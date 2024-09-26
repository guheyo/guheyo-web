'use client';

import { useSearchParams } from 'next/navigation';
import PeriodSelector from '../selectors/period-selector';
import CitySelector from '../selectors/city-selector';
import UserReviewSelector from '../user-review/user-review-selector';

export default function CommunitySelectors() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category') || undefined;

  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      {categorySlug === 'meetup' && <CitySelector />}
      {categorySlug === 'review' && <UserReviewSelector />}
      <PeriodSelector />
    </div>
  );
}
