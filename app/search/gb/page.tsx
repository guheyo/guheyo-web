'use client';

import SearchGbs from '@/components/search/search-gb';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchGbs />
    </Suspense>
  );
}
