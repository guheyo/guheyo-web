'use client';

import DealBumpFormLayout from '@/components/deals/deal-bump-form.layout';
import OfferBumpForm from '@/components/offers/offer-bump-form';

function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <DealBumpFormLayout>
      <OfferBumpForm id={id} />
    </DealBumpFormLayout>
  );
}
export default Page;
