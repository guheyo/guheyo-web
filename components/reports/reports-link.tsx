import { ReportResponse } from '@/generated/graphql';
import WarningIcon from '@mui/icons-material/Warning';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { countComments } from '@/lib/comment/count-comments';
import { useRouter } from 'next/navigation';
import { parseReportPageLink } from '@/lib/report/parse-report-page-link';

export default function ReportsLink({
  reports,
  username,
  type,
  slug,
}: {
  reports: ReportResponse[];
  username: string;
  type: string;
  slug: string;
}) {
  const router = useRouter();
  if (reports.length === 0) return <div />;

  const handleClick = () => {
    router.push(
      parseReportPageLink({
        username,
        type,
        slug,
      }),
    );
  };

  return (
    <button type="button" onClick={handleClick}>
      <div className="flex flex-row gap-1 items-center text-red-500 font-bold">
        <div>
          <WarningIcon fontSize="inherit" />
        </div>
        {`해당 게시글에 ${reports.length}건의 신고 기록이 있어요`}
      </div>
      <div className="flex flex-row gap-1 items-center text-yellow-500 font-bold">
        <div>
          <NewReleasesIcon fontSize="inherit" />
        </div>
        {`이에 대한 작성자의 소명서 ${countComments(
          reports,
        )}개를 확인해 주세요`}
      </div>
    </button>
  );
}
