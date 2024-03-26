import Link from 'next/link';
import { Option } from '@/interfaces/selector.interfaces';
import Scrollbar from './scrollbar';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-light-200`;
  }
  return `border-b-2 border-light-200 text-light-200`;
};

export default function ScrollTextNavbar({
  options,
  selectedValue,
  parseNewURL,
}: {
  options: Option[];
  selectedValue?: string;
  parseNewURL: (value: string) => string;
}) {
  return (
    <Scrollbar upPosition="top-12" zIndex={40}>
      <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8 pt-2 mb-6">
        {options.map((option) => (
          <Link
            key={option.value}
            className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
              option.value === selectedValue,
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
    </Scrollbar>
  );
}
