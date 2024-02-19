'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Scrollbar from '../base/scrollbar';
import { USER_HOME_OPTIONS } from './user-home.constants';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-light-200`;
  }
  return `border-b-2 border-light-200 text-light-200`;
};

export default function UserHomeNavbar() {
  const pathname = usePathname();
  const value = pathname.split('/').at(-1);

  return (
    <Scrollbar upPosition="top-12" zIndex={40}>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center px-2 md:px-0 py-2 mb-6 bg-dark-500">
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          {USER_HOME_OPTIONS?.map((option) => (
            <Link
              key={option.value}
              className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
                option.value === value,
              )}`}
              passHref
              href={`${option.value}`}
            >
              <span className="font-bold text-xs md:text-base">
                {option.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Scrollbar>
  );
}
