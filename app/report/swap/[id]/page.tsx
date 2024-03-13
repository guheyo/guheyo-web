'use client';

import DealReportForm from '@/components/deals/deal-report-form';
import { useFindSwapQuery } from '@/generated/graphql';
import { parseSwapName } from '@/lib/swap/parse-swap-name';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data, loading } = useFindSwapQuery({
    variables: {
      id,
    },
  });

  if (loading) return <div />;
  if (!data?.findSwap) return <div />;
  const swap = data.findSwap;

  return (
    <DealReportForm
      dealType="swap"
      dealId={swap.id}
      dealName={parseSwapName({ name0: swap.name0, name1: swap.name1 })}
    />
  );
}
