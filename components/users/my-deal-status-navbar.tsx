'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  DEAL_OPEN,
  MY_USER_DEAL_STATUS_OPTIONS,
} from '@/lib/deal/deal.constants';
import createQueryString from '@/lib/query-string/create-query-string';
import TextNavbar from '../base/text-navbar';

export default function MyDealStatusNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || DEAL_OPEN;
  const parseNewURL = (newStatus?: string) =>
    `${pathname}?${createQueryString({
      searchParams,
      name: 'status',
      value: newStatus,
    })}`;

  return (
    <TextNavbar
      options={MY_USER_DEAL_STATUS_OPTIONS}
      selectedValue={status}
      parseNewURL={(value) => parseNewURL(value)}
    />
  );
}
