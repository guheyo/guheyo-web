'use client';

import DealBumpLayout from '@/components/deals/deal-bump.layout';
import OfferBump from '@/components/offers/offer-bump';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <DealBumpLayout>
      <OfferBump slug={slug} />
    </DealBumpLayout>
  );
}
export default Page;
