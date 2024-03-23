'use client';

import DealReportForm from '@/components/deals/deal-report-form';
import { Deal } from '@/lib/deal/deal.types';

export default function Page({
  params: { type, refId, refVersionId },
}: {
  params: {
    type: string;
    refId: string;
    refVersionId: string;
  };
}) {
  return (
    <DealReportForm
      dealType={type as Deal}
      dealId={refId}
      refVersionId={refVersionId}
    />
  );
}
