'use client';

import SearchOffers from '@/components/search/search-offers';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchOffers />
    </Suspense>
  );
}
