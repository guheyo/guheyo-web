'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import { useRef } from 'react';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import ReportCard from './report-card';

export default function ReportFeed({
  where,
  orderBy,
}: {
  where: FindReportPreviewsWhereArgs;
  orderBy: FindReportPreviewsOrderByArgs;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { loading, data } = useInfiniteReports({
    ref,
    where,
    orderBy,
    take: 10,
  });

  if (loading) return <div />;
  if (!data?.findReportPreviews) return <div />;

  const reports = data.findReportPreviews.edges;
  return (
    <div className="flex flex-col gap-8 w-full">
      {reports
        .filter((report) => report.node.reportedUser)
        .map((report) => (
          <div key={report.node.id} className="flex flex-col gap-2">
            <ReportCard
              reportId={report.node.id}
              reason={report.node.reason}
              description={report.node.description}
              createdAt={report.node.createdAt}
              reportedUser={report.node.reportedUser!}
              type={report.node.type}
            />
          </div>
        ))}
      <div ref={ref} />
    </div>
  );
}
