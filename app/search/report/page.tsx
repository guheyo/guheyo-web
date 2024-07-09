'use client';

import SearchReports from '@/components/search/search-reports';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <SearchReports />
    </Suspense>
  );
}
