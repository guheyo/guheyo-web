import { ReportResponse } from '@/generated/graphql';
import WarningIcon from '@mui/icons-material/Warning';

export default function ReportsCount({
  reports,
}: {
  reports: ReportResponse[];
}) {
  if (reports.length === 0) return <div />;

  return (
    <div className="flex flex-row gap-0.5 text-red-500">
      <div>
        <WarningIcon fontSize="inherit" />
      </div>
      <div>{`${reports.length}`}</div>
    </div>
  );
}
