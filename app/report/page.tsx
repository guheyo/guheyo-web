'use client';

import ReportHomeFeedLayout from '@/components/reports/report-home-feed.layout';
import ReportFeed from '@/components/reports/report-feed';
import { Suspense } from 'react';
import {
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
} from '@/generated/graphql';

export default function Page() {
  const where: FindReportPreviewsWhereInput = {
    type: undefined,
  };
  const orderBy: FindReportPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <Suspense>
      <ReportHomeFeedLayout showSelectors>
        <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </ReportHomeFeedLayout>
    </Suspense>
  );
}
