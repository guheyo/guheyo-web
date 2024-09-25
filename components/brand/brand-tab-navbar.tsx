'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { BRAND_TAB_OPTIONS } from '@/lib/brand/brand.constants';
import TextNavbar from '../base/text-navbar';

export default function BrandTabNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get('tab') || undefined;

  return (
    <TextNavbar
      options={BRAND_TAB_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'tab',
              value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
