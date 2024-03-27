'use client';

import { MouseEvent } from 'react';
import { useGroup } from '@/hooks/use-group';
import createQueryString from '@/lib/query-string/create-query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Scrollbar from '../base/scrollbar';
import DealSelector from '../deals/deal-selector';
import { Mocks } from '../mock/mock';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `text-dark-200 hover:text-light-200`;
  }
  return `border-b-2 border-light-200 text-light-200`;
};

export default function CategoriesNavbar({
  hideSelector,
}: {
  hideSelector: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  const handleClick = (e: MouseEvent, slug?: string | null) => {
    e.preventDefault();
    router.push(
      `${pathname}?${createQueryString({
        searchParamsString: searchParams.toString(),
        name: 'category',
        value: slug,
      })}`,
    );
  };

  if (!group)
    return (
      <div className="grid gap-2 md:gap-6 lg:gap-8 md:px-0 py-2 mb-10 md:mb-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Mocks length={2} height={10} color="bg-dark-700" />
      </div>
    );
  const categories = group.productCategories;

  return (
    <Scrollbar upPosition="top-12" zIndex={40}>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center py-2 mb-6 bg-dark-500">
        {hideSelector ? (
          <div />
        ) : (
          <div className="flex-none text-xs md:text-base bg-dark-200 rounded">
            <DealSelector categorySlug={categorySlug} />
          </div>
        )}
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          <button
            type="button"
            key="all"
            className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
              !categorySlug,
            )}`}
            onClick={(e) => handleClick(e, null)}
          >
            <span className="font-bold text-xs md:text-base">전체</span>
          </button>
          {categories?.map((category) => (
            <button
              type="button"
              key={category.slug}
              className={`flex-none max-w-sm px-0.5 md:px-0 py-0.5 md:py-1 overflow-hidden shadow-sm ${getButtonCSS(
                category.slug === categorySlug,
              )}`}
              onClick={(e) => handleClick(e, category.slug)}
            >
              <span className="font-bold text-xs md:text-base">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Scrollbar>
  );
}
