'use client';

import OfferFeed from '@/components/offers/offer-feed';
import { useSearchParams } from 'next/navigation';

export interface OffersPageProps {
  params: {
    groupSlug: string;
  };
}

function OffersPage({ params: { groupSlug } }: OffersPageProps) {
  const searchParams = useSearchParams();
  const distinct = searchParams.get('distinct') !== 'false';

  return <OfferFeed type="thumbnail" distinct={distinct} />;
}

export default OffersPage;
