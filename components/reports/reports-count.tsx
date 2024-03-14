import { ReportResponse } from '@/generated/graphql';
import WarningIcon from '@mui/icons-material/Warning';

export default function ReportsCount({
  reports,
}: {
  reports: ReportResponse[];
}) {
  if (reports.length === 0) return <div />;

  return (
    <div className="flex flex-row gap-1 items-center text-red-500 font-bold text-xs md:text-sm">
      <div>
        <WarningIcon fontSize="inherit" />
      </div>
      <div>{`${reports.length}`}</div>
    </div>
  );
}
