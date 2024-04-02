'use client';

import DemandFeed from '@/components/demands/demand-feed';
import { useSearchParams } from 'next/navigation';

export interface DemandsPageProps {
  params: {
    groupSlug: string;
  };
}

function DemandsPage({ params: { groupSlug } }: DemandsPageProps) {
  const searchParams = useSearchParams();
  const distinct = searchParams.get('distinct') !== 'false';

  return <DemandFeed type="text" distinct={distinct} />;
}

export default DemandsPage;
