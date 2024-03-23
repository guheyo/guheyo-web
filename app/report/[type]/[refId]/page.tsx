'use client';

import DealReportForm from '@/components/deals/deal-report-form';
import { useFindVersionQuery } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';

export default function Page({
  params: { type, refId },
}: {
  params: {
    type: string;
    refId: string;
  };
}) {
  const { data, loading } = useFindVersionQuery({
    variables: {
      refId,
    },
  });

  if (loading) return <div />;
  if (!data) return <div />;
  const version = data.findVersion;

  return (
    <DealReportForm
      dealType={type as Deal}
      dealId={refId}
      refVersionId={version.id}
      dealName={version.values.name}
    />
  );
}
