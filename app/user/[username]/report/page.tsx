'use client';

import { useInfiniteReports } from '@/hooks/use-infinite-reports';
import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

export default function Page() {
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
          <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
            <div className="text-light-200 text-sm md:text-base font-semibold">
              {`[신고 ${index + 1}]`} {report.node.title}
            </div>
            <div className="text-light-200 font-light text-xs md:text-sm">
              {report.node.content}
            </div>
            <div className="text-dark-200 text-xs md:text-sm">
              {dayjs(report.node.createdAt).fromNow()}
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
            <div className="flex flex-row gap-0 items-center text-light-200 text-sm md:text-base font-semibold">
              <SubdirectoryArrowRightIcon />
              <div>[피신고자 소명]</div>
            </div>
            <div className="text-light-200 font-light text-xs md:text-sm">
              {report.node.comments[0]?.content}
            </div>
            <div className="text-dark-200 text-xs md:text-sm">
              {dayjs(report.node.comments[0]?.createdAt).fromNow()}
            </div>
          </div>
        </div>
      ))}
      <div ref={ref} />
    </div>
  );
}
