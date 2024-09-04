'use client';

import PeriodSelector from '../selectors/period-selector';
import ReportStatusSelector from './report-status-selector';

export default function ReportSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <ReportStatusSelector />
      <PeriodSelector />
    </div>
  );
}
