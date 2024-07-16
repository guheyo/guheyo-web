'use client';

import SearchThreadsAndReviews from '@/components/search/search-threads-and-reviews';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchThreadsAndReviews />
    </Suspense>
  );
}
