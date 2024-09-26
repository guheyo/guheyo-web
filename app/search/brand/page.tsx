'use client';

import SearchBrands from '@/components/search/search-brands';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchBrands />
    </Suspense>
  );
}
