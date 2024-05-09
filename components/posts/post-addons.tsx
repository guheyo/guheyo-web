import { isNumber } from 'lodash';
import ReportCommentsCount from '../reports/report-comments-count';
import ReportsCount from '../reports/reports-count';
import PostCommentCount from './post-comment-count';

export default function PostAddons({
  reportCount,
  reportCommentCount,
  postCommentCount,
}: {
  reportCount: number;
  reportCommentCount: number;
  postCommentCount?: number | null;
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
      {isNumber(postCommentCount) && (
        <PostCommentCount comentCount={postCommentCount} />
      )}
    </div>
  );
}
