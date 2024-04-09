'use client';

import DealReportForm from '@/components/deals/deal-report-form';
import { useFindVersionPreviewQuery } from '@/generated/graphql';
import { DealType } from '@/lib/deal/deal.types';
import { parseDealerId } from '@/lib/deal/parse-dealer-id';

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
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findVersionPreview) return <div />;
  const version = data.findVersionPreview;

  return (
    <DealReportForm
      dealType={type as DealType}
      dealId={refId}
      refVersionId={version.id}
      dealName={version.values.name}
      reportedUserId={parseDealerId({
        dealType: type as DealType,
        versionValues: version.values,
      })}
      groupId={version.values.groupId}
    />
  );
}
