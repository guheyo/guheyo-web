'use client';

import DealReportForm from '@/components/deals/deal-report-form';
import { useFindVersionPreviewQuery } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import { parseReportedDealerId } from '@/lib/deal/parse-reported-dealer-id';

export default function Page({
  params: { type, refId },
}: {
  params: {
    type: string;
    refId: string;
  };
}) {
  const { data, loading } = useFindVersionPreviewQuery({
    variables: {
      refId,
    },
    fetchPolicy: 'network-only',
  });

  if (loading) return <div />;
  if (!data?.findVersionPreview) return <div />;
  const version = data.findVersionPreview;

  return (
    <DealReportForm
      dealType={type as Deal}
      dealId={refId}
      refVersionId={version.id}
      dealName={version.values.name}
      reportedUserId={parseReportedDealerId({
        dealType: type as Deal,
        versionValues: version.values,
      })}
    />
  );
}
