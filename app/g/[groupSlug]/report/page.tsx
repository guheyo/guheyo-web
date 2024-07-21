'use client';

import ReportFeed from '@/components/reports/report-feed';
import ReportHomeFeedLayout from '@/components/reports/report-home-feed.layout';
import {
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
} from '@/generated/graphql';
import { useGroup } from '@/hooks/use-group';
import { Suspense } from 'react';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindReportPreviewsWhereInput = {
    groupId: group.id,
    type: undefined,
  };
  const orderBy: FindReportPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <Suspense>
      <ReportHomeFeedLayout>
        <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </ReportHomeFeedLayout>
    </Suspense>
  );
}
