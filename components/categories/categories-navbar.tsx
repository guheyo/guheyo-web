'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { isMobile } from 'react-device-detect';
import { useReactiveVar } from '@apollo/client';
import { selectedGuildVar } from '@/lib/apollo/cache';
import ColsSelectButton from '../base/cols-select-button';
import Scrollbar from '../base/scrollbar';
import TypeSelector from '../posts/type-selector';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-deep-dark hover:bg-light-dark text-light-gray hover:text-light-white`;
  }
  return `bg-light-gray text-light-white`;
};

interface Props {
  type: 'offers' | 'demands' | 'swaps';
}

export default function CategoriesNavbar({ type }: Props) {
  const searchParams = useSearchParams();

  const guild = useReactiveVar(selectedGuildVar);
  if (!guild) return <>null</>;

  const selectedCategoryId = searchParams.get('categoryId');
  const categories =
    guild?.productCategories.map((category) => ({
      id: category.id,
      name: category.name,
    })) || [];

  return (
    <Scrollbar>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center py-2 mb-10 md:mb-6">
        <div className="flex-none text-xs md:text-base bg-light-gray rounded">
          <TypeSelector />
        </div>
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          {categories?.map((category) => (
            <Link
              key={category.id}
              className={`flex-none max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(
                category.id === selectedCategoryId,
              )}`}
              passHref
              href={`/${guild.name}/market/${type}?categoryId=${category.id}`}
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
