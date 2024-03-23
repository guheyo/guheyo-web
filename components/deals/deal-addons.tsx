import dayjs from 'dayjs';
import ReportCommentsCount from '../reports/report-comments-count';
import ReportsCount from '../reports/reports-count';

export default function DealAddons({
  bumpedAt,
  reportCount,
  reportCommentCount,
}: {
  bumpedAt: Date;
  reportCount: number;
  reportCommentCount: number;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-xs md:text-sm justify-self-end">
      <ReportsCount reportCount={reportCount} />
      <ReportCommentsCount reportCommentCount={reportCommentCount} />
      <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-400">
        {dayjs(bumpedAt).fromNow()}
      </div>
    </div>
  );
}
