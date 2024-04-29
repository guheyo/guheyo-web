import ReportCommentsCount from '../reports/report-comments-count';
import ReportsCount from '../reports/reports-count';

export default function PostAddons({
  reportCount,
  reportCommentCount,
}: {
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
    </div>
  );
}
