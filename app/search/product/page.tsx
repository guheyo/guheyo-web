'use client';

import SearchAuctions from '@/components/search/search-auctions';
import SearchProducts from '@/components/search/search-products';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const businessFunction =
    (searchParams.get('businessFunction') as BusinessFunction) || 'auction';

  return (
    <Suspense>
      {businessFunction === 'auction' ? (
        <SearchAuctions isInGroup={false} />
      ) : (
        <SearchProducts />
      )}
    </Suspense>
  );
}
