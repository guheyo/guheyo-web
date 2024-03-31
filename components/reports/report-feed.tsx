'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import { useRef } from 'react';
import ReportCard from './report-card';

export default function ReportFeed({
  type,
  refId,
  reportedUserId,
}: {
  type?: string;
  refId?: string;
  reportedUserId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { loading, data } = useInfiniteReports({
    ref,
    where: {
      type,
      refId,
      reportedUserId,
    },
    orderBy: {
      createdAt: 'asc',
    },
    take: 10,
  });

  if (loading) return <div />;
  if (!data?.findReportPreviews) return <div />;

  const reports = data.findReportPreviews.edges;
  return (
    <div className="flex flex-col gap-8 w-full">
      {reports.map((report, index) => (
        <div key={report.node.id} className="flex flex-col gap-2">
          <ReportCard
            index={index}
            id={report.node.id}
            title={report.node.title}
            content={report.node.content}
            createdAt={report.node.createdAt}
            reportedUserId={report.node.reportedUserId}
            type={report.node.type}
            refVersionId={report.node.refVersionId}
          />
        </div>
      ))}
      <div ref={ref} />
    </div>
  );
}
