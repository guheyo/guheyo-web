'use client';

import Link from 'next/link';
import { useReactiveVar } from '@apollo/client';
import { dealVar, guildVar } from '@/lib/apollo/cache';
import Scrollbar from '../base/scrollbar';
import DealSelector from '../deals/deal-selector';
import { Mocks } from '../mock/mock';

const getButtonCSS = (clicked: boolean) => {
  if (!clicked) {
    return `bg-dark-700 hover:bg-dark-600 text-dark-200 hover:text-light-200`;
  }
  return `bg-dark-200 text-light-200`;
};

export interface ProductCategoriesProps {
  categorySlug: string;
}

export default function CategoriesNavbar({
  categorySlug,
}: ProductCategoriesProps) {
  const guild = useReactiveVar(guildVar);
  const deal = useReactiveVar(dealVar);

  if (!guild)
    return (
      <div className="grid gap-2 md:gap-6 lg:gap-8 md:px-0 py-2 mb-10 md:mb-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Mocks length={2} height={10} color="bg-dark-700" />
      </div>
    );
  const categories = guild.productCategories;

  return (
    <Scrollbar upPosition="top-12" zIndex={40}>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8 items-center px-2 md:px-0 py-2 mb-6 bg-dark-500">
        <div className="flex-none text-xs md:text-base bg-dark-200 rounded">
          <DealSelector categorySlug={categorySlug} />
        </div>
        <div className="flex overflow-scroll no-scrollbar justify-start items-center gap-2 md:gap-6 lg:gap-8">
          {categories?.map((category) => (
            <Link
              key={category.slug}
              className={`flex-none max-w-sm rounded p-2 overflow-hidden shadow-sm ${getButtonCSS(
                category.slug === categorySlug,
              )}`}
              passHref
              href={`/g/${guild.slug}/market/${deal}/${category.slug}`}
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
