'use client';

import SearchAuctions from '@/components/search/search-auctions';
import { Suspense } from 'react';

export default function page() {
  return (
    <Suspense>
      <SearchAuctions isHome />
    </Suspense>
  );
}
