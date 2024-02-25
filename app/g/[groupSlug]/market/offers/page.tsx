'use client';

import OfferFeed from '@/components/offers/offer-feed';

export interface OffersPageProps {
  params: {
    groupSlug: string;
  };
}

function OffersPage({ params: { groupSlug } }: OffersPageProps) {
  return <OfferFeed type="thumbnail" />;
}

export default OffersPage;
