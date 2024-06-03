'use client';

import SearchUsers from '@/components/search/search-users';
import { Suspense } from 'react';

export default function page() {
  return (
    <Suspense>
      <SearchUsers />
    </Suspense>
  );
}
