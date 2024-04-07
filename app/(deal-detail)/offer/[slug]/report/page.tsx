'use client';

import OfferReport from '@/components/offers/offer-report';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return <OfferReport slug={slug} />;
}

export default Page;
