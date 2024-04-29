'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import { useRef } from 'react';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { ReportType } from '@/lib/report/report.types';
import { useSearchParams } from 'next/navigation';
import ReportCard from './report-card';

export default function ReportFeed({
  where,
  orderBy,
}: {
  where: FindReportPreviewsWhereArgs;
  orderBy: FindReportPreviewsOrderByArgs;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || undefined;

  const { loading, data } = useInfiniteReports({
    ref,
    where: {
      ...where,
      type,
    },
    orderBy,
    take: 10,
  });

  if (loading) return <div />;
  if (!data?.findReportPreviews) return <div />;

  const reports = data.findReportPreviews.edges;
  return (
    <div className="flex flex-col gap-4">
      {reports
        .filter((report) => report.node.reportedUser)
        .map((report) => (
          <ReportCard
            key={report.node.id}
            reportId={report.node.id}
            reason={report.node.reason}
            description={report.node.description}
            createdAt={report.node.createdAt}
            reportedUser={report.node.reportedUser}
            type={report.node.type as ReportType}
          />
        ))}
      <div ref={ref} />
    </div>
  );
}
