'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { OFFER_IS_ARCHIVED, OFFER_OPEN } from '@/lib/offer/offer.constants';
import createQueryString from '@/lib/query-string/create-query-string';
import { Option } from '@/interfaces/selector.interfaces';
import TextNavbar from '../base/text-navbar';

export default function OfferStatusNavbar({ options }: { options: Option[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue =
    searchParams.get('isArchived') === true.toString()
      ? OFFER_IS_ARCHIVED
      : searchParams.get('status') || OFFER_OPEN;

  const parseNewURL = (newValue?: string) => {
    let queryString = createQueryString({
      searchParamsString: searchParams.toString(),
      name: 'status',
      value: newValue !== OFFER_IS_ARCHIVED ? newValue : undefined,
    });
    queryString = createQueryString({
      searchParamsString: queryString,
      name: 'isArchived',
      value:
        newValue === OFFER_IS_ARCHIVED ? true.toString() : false.toString(),
    });
    return `${pathname}?${queryString}`;
  };

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) => parseNewURL(value)}
      size="medium"
    />
  );
}
