'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  DEAL_IS_HIDDEN,
  DEAL_OPEN,
  MY_USER_DEAL_STATUS_OPTIONS,
} from '@/lib/deal/deal.constants';
import createQueryString from '@/lib/query-string/create-query-string';
import TextNavbar from '../base/text-navbar';

export default function MyDealStatusNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue =
    searchParams.get('isHidden') === true.toString()
      ? DEAL_IS_HIDDEN
      : searchParams.get('status') || DEAL_OPEN;

  const parseNewURL = (newValue?: string) => {
    let queryString = createQueryString({
      searchParamsString: searchParams.toString(),
      name: 'status',
      value: newValue !== DEAL_IS_HIDDEN ? newValue : undefined,
    });
    queryString = createQueryString({
      searchParamsString: queryString,
      name: 'isHidden',
      value: newValue === DEAL_IS_HIDDEN ? true.toString() : false.toString(),
    });
    return `${pathname}?${queryString}`;
  };

  return (
    <TextNavbar
      options={MY_USER_DEAL_STATUS_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => parseNewURL(value)}
    />
  );
}
