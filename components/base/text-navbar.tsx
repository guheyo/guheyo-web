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
}: {
  options: Option[];
  selectedValue?: string;
  parseNewURL: (value: string) => string;
  size: 'large' | 'medium';
}) {
  return (
    <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-6 py-2">
      {options.map((option) => (
        <Link
          key={option.value}
          className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm font-bold ${getButtonCSS(
            option.value === selectedValue,
          )}`}
          passHref
          href={parseNewURL(option.value)}
        >
          <span
            className={
              size === 'large' ? `text-base md:text-lg` : `text-sm md:text-base`
            }
          >
            {option.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
