'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useSearchParams } from 'next/navigation';
import { Category } from 'prisma';
import { useGuildCategories } from '@/app/lib/api/guilds';
import ColsSelectButton from '../base/cols-select-button';
import Scrollbar from '../base/scrollbar';
import TypeSelector from '../posts/type-selector';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-neutral-white hover:bg-gray-200 text-black`;
  }
  return `bg-black text-neutral-white hover:bg-gray-700 text-white`;
};

interface Props {
  guildName: string;
  categoryName: string;
}

export default function CategoriesNavbar({ guildName, categoryName }: Props) {
  const { data: categories } = useGuildCategories(guildName);
  const searchParams = useSearchParams();
  const [dummy, setDummy] = useState<Category[]>([]);

  const activeCategory = useMemo(
    () =>
      categories
        ?.concat(dummy)
        ?.find((c) => encodeURIComponent(c.name) === categoryName),
    [categories, categoryName, dummy],
  );

  useEffect(() => {
    function dummyMaker() {
      const dummyCategoies: Category[] = [];
      ['경매', '경매일정'].forEach((category, index) => {
        dummyCategoies.push({
          guildId: `dummyGuildId${index}`,
          id: `dummyCategoryId${index}`,
          name: category,
          rank: 4 + index,
        });
      });
      setDummy(dummyCategoies);
    }
    dummyMaker();
  }, []);

  // dummy params 백엔드 api 업데이트 시 삭제
  function searchParamsToString(index: number) {
    const params = searchParams.toString();
    if (index === 5) return 'type=auction';
    if (index === 6) return 'type=auction-schedule';
    return params;
  }

  return (
    <Scrollbar>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center py-2 border-b-[1px] mb-10 md:mb-6">
        <div className="flex-none text-xs md:text-base">
          <TypeSelector />
        </div>
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          {categories?.concat(dummy).map((category, index) => (
            <Link
              key={category.id}
              className={`flex-none max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(
                category.id === activeCategory?.id,
              )}`}
              passHref
              href={`/${guildName}/${index < 5 ? 'market' : 'auction'}/${
                category.name
              }?${searchParamsToString(index)}`}
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
