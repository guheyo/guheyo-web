'use client';

import DemandFeed from '@/components/demands/demand-feed';

export interface DemandsPageProps {
  params: {
    groupSlug: string;
  };
}

function DemandsPage({ params: { groupSlug } }: DemandsPageProps) {
  return <DemandFeed type="text" />;
}

export default DemandsPage;
