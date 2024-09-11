'use client';

import WriteBrandForm from '@/components/brand/write-brand-form';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <WriteBrandForm />
    </Suspense>
  );
}
