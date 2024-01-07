'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useReactiveVar } from '@apollo/client';
import { selectedGuildVar } from '@/lib/apollo/cache';
import Scrollbar from '../base/scrollbar';
import TypeSelector from '../posts/type-selector';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-dark-700 hover:bg-dark-600 text-dark-200 hover:text-light-200`;
  }
  return `bg-dark-200 text-light-200`;
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
    <Scrollbar upPosition="top-16">
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center px-2 md:px-0 py-2 mb-10 md:mb-6 bg-dark-500">
        <div className="flex-none text-xs md:text-base bg-dark-200 rounded">
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
      </div>
    </Scrollbar>
  );
}
