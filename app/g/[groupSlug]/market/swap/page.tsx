'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { useSearchParams } from 'next/navigation';

export interface SwapsPageProps {
  params: {
    groupSlug: string;
  };
}

function SwapsPage({ params: { groupSlug } }: SwapsPageProps) {
  const searchParams = useSearchParams();
  const distinct = searchParams.get('distinct') !== 'false';

  return <SwapFeed type="thumbnail" distinct={distinct} />;
}

export default SwapsPage;
