'use client';

import SearchThreads from '@/components/search/search-threads';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchThreads categoryType='community' />
    </Suspense>
  );
}
