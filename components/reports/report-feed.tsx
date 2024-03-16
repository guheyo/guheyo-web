'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import ReportCard from './report-card';
import ReportCommentCard from './report-comment-card';

export default function ReportFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const offerId = searchParams.get('offerId');
  const demandId = searchParams.get('demandId');
  const swapId = searchParams.get('swapId');

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
    <div className="flex flex-col gap-8 w-full md:w-3/4">
      {reports.map((report, index) => (
        <div key={report.node.id} className="flex flex-col gap-2">
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
