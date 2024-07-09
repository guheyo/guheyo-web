'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { OFFER_IS_ARCHIVED, OFFER_OPEN } from '@/lib/offer/offer.constants';
import { Option } from '@/interfaces/selector.interfaces';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import TextNavbar from '../base/text-navbar';

export default function OfferStatusNavbar({ options }: { options: Option[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue =
    searchParams.get('isArchived') === true.toString()
      ? OFFER_IS_ARCHIVED
      : searchParams.get('status') || OFFER_OPEN;

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
              value: value !== OFFER_IS_ARCHIVED ? value : undefined,
            },
            {
              name: 'isArchived',
              value:
                value === OFFER_IS_ARCHIVED
                  ? true.toString()
                  : false.toString(),
            },
          ],
        })
      }
      size="medium"
    />
  );
}
