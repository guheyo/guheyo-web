'use client';

import DealBumpFormLayout from '@/components/deals/deal-bump-form.layout';
import DemandBumpForm from '@/components/demands/demand-bump-form';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <DealBumpFormLayout>
      <DemandBumpForm slug={slug} />
    </DealBumpFormLayout>
  );
}
export default Page;
