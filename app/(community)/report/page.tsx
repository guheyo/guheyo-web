'use client';

import HomeReportFeedLayout from '@/components/reports/home-report-feed.layout';
import ReportFeed from '@/components/reports/report-feed';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';

export default function Page() {
  const where: FindReportPreviewsWhereArgs = {
    type: undefined,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <HomeReportFeedLayout>
      <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />
    </HomeReportFeedLayout>
  );
}
