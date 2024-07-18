'use client';

import ReportHomeFeedLayout from '@/components/reports/report-home-feed.layout';
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
      <Suspense>
        <ReportHomeFeedLayout>
          <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />
        </ReportHomeFeedLayout>
      </Suspense>
    </div>
  );
}
