'use client';

import DemandFeed from '@/components/demands/demand-feed';
import { parseDealStatus } from '@/lib/deal/parse-deal-status';
import { useSearchParams } from 'next/navigation';

export interface DemandsPageProps {
  params: {
    groupSlug: string;
  };
}

function DemandsPage({ params: { groupSlug } }: DemandsPageProps) {
  const searchParams = useSearchParams();
  const status = parseDealStatus({
    status: searchParams.get('status'),
  });
  const distinct = searchParams.get('distinct') !== 'false';

  return <DemandFeed type="text" status={status} distinct={distinct} />;
}

export default DemandsPage;
