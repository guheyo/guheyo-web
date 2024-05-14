'use client';

import { MouseEvent } from 'react';
import createQueryString from '@/lib/query-string/create-query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Scrollbar from '../base/scrollbar';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-gray-300`;
  }
  return `border-b-2 border-light-200 text-gray-300`;
};

export default function MemberRolesNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const handleClick = (e: MouseEvent, selectedType: string | null) => {
    e.preventDefault();
    router.push(
      `${pathname}?${createQueryString({
        searchParamsString: searchParams.toString(),
        name: 'role',
        value: selectedType,
      })}`,
    );
  };

  return (
    <Scrollbar upPosition="top-12" zIndex={40}>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center py-2 mb-6 bg-dark-500">
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          <button
            type="button"
            key="all"
            className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
              !type,
            )}`}
            onClick={(e) => handleClick(e, null)}
          >
            <span className="font-bold text-xs md:text-base">전체</span>
          </button>
        </div>
      </div>
    </Scrollbar>
  );
}
