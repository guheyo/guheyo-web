'use client';

import DealBumpFormLayout from '@/components/deals/deal-bump-form.layout';
import SwapBumpForm from '@/components/swaps/swap-bump-form';

function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <DealBumpFormLayout>
      <SwapBumpForm id={id} />
    </DealBumpFormLayout>
  );
}
export default Page;
