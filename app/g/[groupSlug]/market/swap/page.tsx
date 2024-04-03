'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { parseDealStatus } from '@/lib/deal/parse-deal-status';
import { useSearchParams } from 'next/navigation';

export interface SwapsPageProps {
  params: {
    groupSlug: string;
  };
}

function SwapsPage({ params: { groupSlug } }: SwapsPageProps) {
  const searchParams = useSearchParams();
  const status = parseDealStatus({
    status: searchParams.get('status'),
  });
  const distinct = searchParams.get('distinct') !== 'false';

  return <SwapFeed type="thumbnail" status={status} distinct={distinct} />;
}

export default SwapsPage;
