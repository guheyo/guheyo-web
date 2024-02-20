'use client';

import OfferDetail from '@/components/offers/offer-detail';

function OfferPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return <OfferDetail slug={slug} />;
}

export default OfferPage;
