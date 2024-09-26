'use client';

import Link from 'next/link';
import { Option } from '@/interfaces/selector.interfaces';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-gray-300`;
  }
  return `border-b-2 border-dark-200 text-gray-300`;
};

export default function TextNavbar({
  options,
  selectedValue,
  parseNewURL,
  size,
  prefix,
}: {
  options: Option[];
  selectedValue?: string;
  parseNewURL: (value: string) => string;
  size: 'large' | 'medium';
  prefix?: string;
}) {
  return (
    <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-6">
      {options.map((option) => (
        <Link
          key={option.value}
          className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm font-bold ${getButtonCSS(
            option.value === selectedValue ||
              (option.value === 'all' && selectedValue === undefined),
          )}`}
          passHref
          href={parseNewURL(option.value)}
        >
          <span
            className={
              size === 'large' ? `text-base md:text-base` : `text-sm md:text-sm`
            }
          >
            {`${prefix || ''}${option.label}`}
          </span>
        </Link>
      ))}
    </div>
  );
}
