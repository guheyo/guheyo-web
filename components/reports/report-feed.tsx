'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import { useRef } from 'react';
import { ReportType } from '@/lib/report/report.types';
import { useSearchParams } from 'next/navigation';
import { useGroup } from '@/hooks/use-group';
import {
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
} from '@/generated/graphql';
import { parseReportStatus } from '@/lib/report/parse-report-status';
import ReportCard from './report-card';

export default function ReportFeed({
  defaultWhere,
  defaultOrderBy,
}: {
  defaultWhere: FindReportPreviewsWhereInput;
  defaultOrderBy: FindReportPreviewsOrderByInput;
}) {
  const searchParams = useSearchParams();
  const { group } = useGroup();
  const ref = useRef<HTMLDivElement>(null);
  const type = searchParams.get('type') || defaultWhere.type;
  const status = parseReportStatus({
    status:
      searchParams.get('status') || (defaultWhere.status as string | undefined),
  });
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, data } = useInfiniteReports({
    ref,
    where: {
      ...defaultWhere,
      groupId: group?.id,
      type,
      status,
    },
    orderBy: defaultOrderBy,
    keyword,
    target,
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
