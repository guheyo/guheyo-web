import Link from 'next/link';
import { Option } from '@/interfaces/selector.interfaces';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-light-200`;
  }
  return `border-b-2 border-dark-200 text-light-200`;
};

export default function TextNavbar({
  options,
  selectedValue,
  parseNewURL,
}: {
  options: Option[];
  selectedValue?: string;
  parseNewURL: (value: string) => string;
}) {
  return (
    <div className="flex justify-start items-center gap-2 md:gap-6 lg:gap-6 py-2">
      {options.map((option) => (
        <Link
          key={option.value}
          className={`${getButtonCSS(option.value === selectedValue)}`}
          passHref
          href={parseNewURL(option.value)}
        >
          <span className="font-bold text-sm md:text-base">{option.label}</span>
        </Link>
      ))}
    </div>
  );
}
