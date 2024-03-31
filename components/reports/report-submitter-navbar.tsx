'use client';

import { usePathname } from 'next/navigation';
import {
  PRIVATE_REPORT_OPTIONS,
  PUBLIC_REPORT_OPTIONS,
} from '@/lib/report/report.constants';
import TextNavbar from '../base/text-navbar';

export default function ReportSubmitterNavbar({
  isPublic,
}: {
  isPublic: boolean;
}) {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);
  const options = isPublic ? PUBLIC_REPORT_OPTIONS : PRIVATE_REPORT_OPTIONS;

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
