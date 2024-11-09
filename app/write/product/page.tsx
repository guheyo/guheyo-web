'use client';

import WriteProductForm from '@/components/product/write-product-form';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <WriteProductForm />
    </Suspense>
  );
}
