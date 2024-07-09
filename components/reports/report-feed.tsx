'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import { useRef } from 'react';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { ReportType } from '@/lib/report/report.types';
import { useSearchParams } from 'next/navigation';
import { useGroup } from '@/hooks/use-group';
import ReportCard from './report-card';

export default function ReportFeed({
  defaultWhere,
  defaultOrderBy,
  keyword,
}: {
  defaultWhere: FindReportPreviewsWhereArgs;
  defaultOrderBy: FindReportPreviewsOrderByArgs;
  keyword?: string;
}) {
  const searchParams = useSearchParams();
  const { group } = useGroup();
  const ref = useRef<HTMLDivElement>(null);
  const type = searchParams.get('type') || defaultWhere.type;

  const { loading, data } = useInfiniteReports({
    ref,
    where: {
      ...defaultWhere,
      groupId: group?.id,
      type,
    },
    orderBy: defaultOrderBy,
    keyword,
    take: 10,
  });

  if (loading) return <div />;
  if (!data?.findReportPreviews) return <div />;

  const reports = data.findReportPreviews.edges;
  return (
    <div className="grid gap-2 grid-cols-1">
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
