'use client';

import SearchGroups from '@/components/search/search-groups';
import { Suspense } from 'react';

export default function page() {
  return (
    <Suspense>
      <SearchGroups />
    </Suspense>
  );
}
