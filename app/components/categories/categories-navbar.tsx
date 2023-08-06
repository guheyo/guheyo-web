'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { isMobile } from 'react-device-detect';
import { useGuildCategories } from '@/app/lib/api/guilds';
import { useSearchParams } from 'next/navigation';
import ColsSelectButton from '../base/cols-select-button';
import Scrollbar from '../base/scrollbar';
import TypeSelector from '../posts/type-selector';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-neutral-white hover:bg-gray-200 text-black`;
  }
  return `bg-black hover:bg-gray-700 text-white`;
};

interface Props {
  guildName: string;
  categoryName: string;
}

export default function CategoriesNavbar({ guildName, categoryName }: Props) {
  const { data: categories } = useGuildCategories(guildName);
  const searchParams = useSearchParams();

  const activeCategory = useMemo(
    () => categories?.find((c) => c.name === categoryName),
    [categories, categoryName],
  );

  return (
    <Scrollbar>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center py-2 border-b-[1px] mb-10 md:mb-6">
        <div className="flex-none text-xs md:text-base">
          <TypeSelector />
        </div>
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          {categories?.map((category) => (
            <Link
              key={category.id}
              className={`flex-none max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(
                categoryName === activeCategory?.name,
              )}`}
              passHref
              href={`/g/${guildName}/categories/${
                category.name
              }?${searchParams.toString()}`}
            >
              <span className="font-bold text-xs md:text-base">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex-none">
          {isMobile && (
            <div className="flex-none">
              <ColsSelectButton />
            </div>
          )}
        </div>
      </div>
    </Scrollbar>
  );
}
