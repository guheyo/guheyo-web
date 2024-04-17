import dayjs from 'dayjs';
import ReportCommentsCount from '../reports/report-comments-count';
import ReportsCount from '../reports/reports-count';

export default function PostAddons({
  createdAt,
  reportCount,
  reportCommentCount,
}: {
  createdAt: Date;
  reportCount: number;
  reportCommentCount: number;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-xs md:text-sm justify-self-end">
      {reportCount > 0 ? (
        <>
          <ReportsCount reportCount={reportCount} />
          <ReportCommentsCount reportCommentCount={reportCommentCount} />
        </>
      ) : (
        <div />
      )}
      <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-400">
        {dayjs(createdAt).fromNow()}
      </div>
    </div>
  );
}
