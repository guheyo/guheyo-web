import WarningIcon from '@mui/icons-material/Warning';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useRouter } from 'next/navigation';
import { parseReportFeedLink } from '@/lib/report/parse-report-feed-link';

export default function ReportsLink({
  reportCount,
  reportCommentCount,
  type,
  slug,
}: {
  reportCount: number;
  reportCommentCount: number;
  type: string;
  slug: string;
}) {
  const router = useRouter();
  if (!reportCount) return <div />;

  const handleClick = () => {
    router.push(
      parseReportFeedLink({
        type,
        slug,
      }),
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-col gap-1 text-xs md:text-sm w-full p-3 rounded"
    >
      <div className="  flex flex-row gap-2 items-center text-red-500 font-semibold">
        <WarningIcon fontSize="medium" />
        {`해당 게시글에 ${reportCount}건의 신고 기록이 있어요`}
      </div>
      <div className="flex flex-row gap-2 items-center text-yellow-500 font-semibold">
        <div className="animate-spin">
          <NewReleasesIcon fontSize="medium" />
        </div>
        {`작성자의 소명서 ${reportCommentCount}개를 확인해 주세요`}
      </div>
    </button>
  );
}
