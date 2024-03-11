'use client';

import DealBumpFormLayout from '@/components/deals/deal-bump-form.layout';
import OfferBumpForm from '@/components/offers/offer-bump-form';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <DealBumpFormLayout>
      <OfferBumpForm slug={slug} />
    </DealBumpFormLayout>
  );
}
export default Page;
