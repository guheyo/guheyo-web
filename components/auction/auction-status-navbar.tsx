'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Option } from '@/interfaces/selector.interfaces';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import TextNavbar from '../base/text-navbar';

export default function AuctionStatusNavbar({
  options,
}: {
  options: Option[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get('status') || undefined;

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'status',
              value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
