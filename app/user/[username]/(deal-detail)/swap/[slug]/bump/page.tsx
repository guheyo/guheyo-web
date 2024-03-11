'use client';

import DealBumpFormLayout from '@/components/deals/deal-bump-form.layout';
import SwapBumpForm from '@/components/swaps/swap-bump-form';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <DealBumpFormLayout>
      <SwapBumpForm slug={slug} />
    </DealBumpFormLayout>
  );
}
export default Page;
