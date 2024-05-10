import WarningIcon from '@mui/icons-material/Warning';
import { useRouter } from 'next/navigation';
import { parseReportFeedLink } from '@/lib/report/parse-report-feed-link';
import { ReportFeedType } from '@/lib/report/report.types';

export default function ReportsLink({
  reportCount,
  type,
  slug,
}: {
  reportCount: number;
  type: ReportFeedType;
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
      className="flex flex-col gap-1 text-xs md:text-sm w-full"
    >
      <div className="  flex flex-row gap-2 items-center text-red-400">
        <WarningIcon fontSize="medium" />
        {`해당 게시글에 ${reportCount}건의 신고 기록이 있어요`}
      </div>
    </button>
  );
}
