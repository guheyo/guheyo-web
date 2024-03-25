'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  DEAL_OPEN,
  MY_USER_DEAL_STATUS_OPTIONS,
} from '@/lib/deal/deal.constants';
import createQueryString from '@/lib/query-string/create-query-string';
import Scrollbar from '../base/scrollbar';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-light-200`;
  }
  return `border-b-2 border-light-200 text-light-200`;
};

export default function MyUserDealStatusNavbar() {
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
    <Scrollbar upPosition="top-12" zIndex={40}>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center px-2 md:px-0 py-2 mb-6 bg-dark-500">
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          {MY_USER_DEAL_STATUS_OPTIONS?.map((option) => (
            <Link
              key={option.value}
              className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
                option.value === status,
              )}`}
              passHref
              href={parseNewURL(option.value)}
            >
              <span className="font-bold text-base md:text-lg">
                {option.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Scrollbar>
  );
}
