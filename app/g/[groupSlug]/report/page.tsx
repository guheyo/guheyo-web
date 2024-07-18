'use client';

import ReportFeed from '@/components/reports/report-feed';
import ReportHomeFeedLayout from '@/components/reports/report-home-feed.layout';
import { useGroup } from '@/hooks/use-group';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { Suspense } from 'react';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindReportPreviewsWhereArgs = {
    groupId: group.id,
    type: undefined,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
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
