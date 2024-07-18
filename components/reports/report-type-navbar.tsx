'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { REPORT_TYPE_OPTIONS } from '@/lib/report/report.constants';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { Option } from '@/interfaces/selector.interfaces';
import TextNavbar from '../base/text-navbar';

export default function ReportTypeNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <TextNavbar
      options={REPORT_TYPE_OPTIONS as Option[]}
      selectedValue={type || undefined}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'type',
              value: value === 'all' ? undefined : value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
