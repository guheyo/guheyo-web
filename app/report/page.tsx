'use client';

import HomeReportFeedLayout from '@/components/reports/home-report-feed.layout';
import ReportFeed from '@/components/reports/report-feed';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { Suspense } from 'react';

export default function Page() {
  const where: FindReportPreviewsWhereArgs = {
    type: undefined,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <div className="mx-2 md:mx-0">
      <HomeReportFeedLayout>
        <Suspense>
          <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />
        </Suspense>
      </HomeReportFeedLayout>
    </div>
  );
}
