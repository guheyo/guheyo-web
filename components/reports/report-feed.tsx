'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import { useRef } from 'react';
import ReportCard from './report-card';
import ReportCommentCard from './report-comment-card';

export default function ReportFeed({
  type,
  offerId,
  demandId,
  swapId,
}: {
  type: string;
  offerId?: string;
  demandId?: string;
  swapId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { loading, data } = useInfiniteReports({
    ref,
    where: {
      type: type!,
      offerId: offerId || undefined,
      demandId: demandId || undefined,
      swapId: swapId || undefined,
    },
    orderBy: {
      createdAt: 'asc',
    },
    take: 10,
  });

  if (!type && !(offerId || demandId || swapId)) return <div />;
  if (loading) return <div />;
  if (!data?.findReports) return <div />;

  const reports = data.findReports.edges;

  return (
    <div className="flex flex-col gap-5 w-full">
      {reports.map((report, index) => (
        <div key={report.node.id} className="flex flex-col gap-1">
          <ReportCard
            index={index}
            title={report.node.title}
            content={report.node.content}
            createdAt={report.node.createdAt}
          />
          <ReportCommentCard
            content={report.node.comments[0]?.content}
            createdAt={report.node.comments[0]?.createdAt}
          />
        </div>
      ))}
      <div ref={ref} />
    </div>
  );
}
