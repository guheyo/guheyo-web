'use client';

import OfferFeed from '@/components/offers/offer-feed';
import { parseDealStatus } from '@/lib/deal/parse-deal-status';
import { useSearchParams } from 'next/navigation';

export interface OffersPageProps {
  params: {
    groupSlug: string;
  };
}

function OffersPage({ params: { groupSlug } }: OffersPageProps) {
  const searchParams = useSearchParams();
  const status = parseDealStatus({
    status: searchParams.get('status'),
  });
  const distinct = searchParams.get('distinct') !== 'false';

  return <OfferFeed type="thumbnail" status={status} distinct={distinct} />;
}

export default OffersPage;
