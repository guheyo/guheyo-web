'use client';

import DealBumpFormLayout from '@/components/deals/deal-bump-form.layout';
import DemandBumpForm from '@/components/demands/demand-bump-form';

function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <DealBumpFormLayout>
      <DemandBumpForm id={id} />
    </DealBumpFormLayout>
  );
}
export default Page;
