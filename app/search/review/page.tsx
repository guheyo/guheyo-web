'use client';

import SearchUserReviews from '@/components/search/search-user-reviews';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchUserReviews />
    </Suspense>
  );
}
