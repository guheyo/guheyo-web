'use client';

import WriteGroupForm from '@/components/groups/write-group-form';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <WriteGroupForm />
    </Suspense>
  );
}
