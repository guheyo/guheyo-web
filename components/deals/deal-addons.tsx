import { ReportResponse } from '@/generated/graphql';
import ReportCommentsCount from '../reports/report-comments-count';
import ReportsCount from '../reports/reports-count';

export default function DealAddons({ reports }: { reports: ReportResponse[] }) {
  return (
    <div className="flex flex-row gap-2 items-center text-xs md:text-sm">
      <ReportsCount reports={reports} />
      <ReportCommentsCount reports={reports} />
    </div>
  );
}
