'use client';

import SearchAuctions from '@/components/search/search-auctions';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchAuctions />
    </Suspense>
  );
}
