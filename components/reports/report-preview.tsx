import dayjs from 'dayjs';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Link from 'next/link';
import { parseReportTypeName } from '@/lib/report/parse-report-type-name';
import { ReportType } from '@/lib/report/report.types';

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
      <div className="text-red-500 text-sm md:text-base font-semibold">
        {`[${parseReportTypeName(type)} 신고] ${reason}`}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between w-full">
          <div className="text-light-200 font-light text-xs md:text-sm">
            {description}
          </div>
          <div className="mr-2">
            <Link href={`/report/${reportId}`}>
              <HistoryEduIcon />
            </Link>
          </div>
        </div>
        <div className="text-dark-200 text-xs md:text-sm">
          {dayjs(createdAt).fromNow()}
        </div>
      </div>
    </div>
  );
}
