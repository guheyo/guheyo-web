'use client';

import { REPORT_STATUS_OPTIONS } from '@/lib/report/report.constants';
import QuerySelector from '../selectors/query-selector';

export default function ReportStatusSelector() {
  return (
    <QuerySelector
      queryKey="status"
      defaultValue="all"
      options={REPORT_STATUS_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-sm"
    />
  );
}
