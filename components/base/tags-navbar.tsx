'use client';

import Link from 'next/link';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-gray-300`;
  }
  return `border-b-2 border-dark-200 text-gray-300`;
};

export default function TagsNavbar({
  tags,
  selectedValue,
  parseNewURL,
  size,
}: {
  tags: string[];
  selectedValue?: string;
  parseNewURL: (value: string) => string;
  size: 'large' | 'medium';
}) {
  return (
    <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-6">
      {tags.map((tag) => (
        <Link
          key={tag}
          className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm font-bold ${getButtonCSS(
            tag === selectedValue ||
              (tag === 'all' && selectedValue === undefined),
          )}`}
          passHref
          href={parseNewURL(tag)}
        >
          <span
            className={
              size === 'large' ? `text-base md:text-lg` : `text-sm md:text-base`
            }
          >
            {tag}
          </span>
        </Link>
      ))}
    </div>
  );
}
