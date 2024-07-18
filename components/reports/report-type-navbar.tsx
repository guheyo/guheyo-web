'use client';

import { MouseEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { REPORT_TYPE_OPTIONS } from '@/lib/report/report.constants';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import Scrollbar from '../base/scrollbar';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-gray-300`;
  }
  return `border-b-2 border-gray-300 text-gray-300`;
};

export default function ReportTypeNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const handleClick = (e: MouseEvent, selectedType: string | null) => {
    e.preventDefault();
    router.push(
      parseNewURL({
        searchParamsString: searchParams.toString(),
        pathname,
        paramsToUpdate: [
          {
            name: 'type',
            value: selectedType,
          },
        ],
      }),
    );
  };

  return (
    <Scrollbar upPosition="top-12" zIndex={40}>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center mb-4 bg-dark-500">
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          <button
            type="button"
            key="all"
            className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
              !type,
            )}`}
            onClick={(e) => handleClick(e, null)}
          >
            <span className="font-bold text-sm md:text-base">전체</span>
          </button>
          {REPORT_TYPE_OPTIONS?.map((typeOption) => (
            <button
              type="button"
              key={typeOption.value}
              className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
                typeOption.value === type,
              )}`}
              onClick={(e) => handleClick(e, typeOption.value)}
            >
              <span className="font-bold text-sm md:text-base">
                {typeOption.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Scrollbar>
  );
}
