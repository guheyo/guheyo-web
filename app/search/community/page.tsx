'use client';

import SearchCommunity from '@/components/search/search-community';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchCommunity />
    </Suspense>
  );
}
