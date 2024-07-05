'use client';

import SearchProducts from '@/components/search/search-products';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchProducts isInGroup />
    </Suspense>
  );
}
