import dayjs from 'dayjs';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Link from 'next/link';
import { parseVersionLink } from '@/lib/version/parse-version-page.link';

export default function ReportPreview({
  reason,
  description,
  createdAt,
  type,
}: {
  reason: string;
  description?: string | null;
  createdAt: Date;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
      <div className="text-red-500 text-sm md:text-base font-semibold">
        {`[신고] ${reason}`}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between w-full">
          <div className="text-light-200 font-light text-xs md:text-sm">
            {description}
          </div>
          <div className="mr-2">
            <Link href="/version">
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
