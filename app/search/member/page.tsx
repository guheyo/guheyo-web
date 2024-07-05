'use client';

import SearchUsers from '@/components/search/search-users';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchUsers />
    </Suspense>
  );
}
