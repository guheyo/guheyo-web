import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Link from 'next/link';
import { parseReportTypeName } from '@/lib/report/parse-report-type-name';
import { ReportType } from '@/lib/report/report.types';
import PostCreatedAt from '../posts/post-created-at';

export default function ReportPreview({
  reportId,
  reason,
  description,
  createdAt,
  type,
}: {
  reportId: string;
  reason: string;
  description?: string | null;
  createdAt: Date;
  type: ReportType;
}) {
  return (
    <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
      <div className="flex flex-row items-center text-gray-300 text-xs md:text-sm font-semibold">
        <div className="flex-1">
          {`[${parseReportTypeName(type)} 신고] ${reason}`}
        </div>
        <div className="flex-none">
          <PostCreatedAt createdAt={createdAt} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between w-full">
          <div className="text-dark-100 font-light text-xs md:text-sm">
            {description}
          </div>
          <div className="mr-2">
            <Link href={`/report/${reportId}`}>
              <HistoryEduIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
