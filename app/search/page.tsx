'use client';

import SearchGroups from '@/components/search/search-groups';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchGroups placeholder="어떤 그룹을 찾고 있나요?" />
    </Suspense>
  );
}
