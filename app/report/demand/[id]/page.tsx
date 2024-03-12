'use client';

import DealReportForm from '@/components/deals/deal-report-form';
import { useFindDemandQuery } from '@/generated/graphql';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data, loading } = useFindDemandQuery({
    variables: {
      id,
    },
  });

  if (loading) return <div />;
  if (!data?.findDemand) return <div />;
  const demand = data.findDemand;

  return <DealReportForm dealType='demand' dealId={demand.id} dealName={demand.name} />;
}
