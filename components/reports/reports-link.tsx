import WarningIcon from '@mui/icons-material/Warning';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useRouter } from 'next/navigation';
import { parseReportPageLink } from '@/lib/report/parse-report-page-link';

export default function ReportsLink({
  reportCount,
  reportCommentCount,
  username,
  type,
  slug,
}: {
  reportCount: number;
  reportCommentCount: number;
  username: string;
  type: string;
  slug: string;
}) {
  const router = useRouter();
  if (!reportCount) return <div />;

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
        {`해당 게시글에 ${reportCount}건의 신고 기록이 있어요`}
      </div>
      <div className="flex flex-row gap-1 items-center text-yellow-500 font-bold">
        <div>
          <NewReleasesIcon fontSize="inherit" />
        </div>
        {`이에 대한 작성자의 소명서 ${reportCommentCount}개를 확인해 주세요`}
      </div>
    </button>
  );
}
