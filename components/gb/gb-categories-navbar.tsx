'use client';

import { MouseEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { useGroup } from '@/hooks/use-group';
import { CategorySummary } from '@/lib/category/category.interfaces';
import CategoriesNavbar from '../categories/categories-navbar';

export default function GbCategoriesNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { group } = useGroup('root');
  const categories: CategorySummary[] =
    group?.categories.filter((category) => category.type === 'gb') || [];

  const handleClick = (e: MouseEvent, slug?: string | null) => {
    e.preventDefault();
    router.push(
      parseNewURL({
        searchParamsString: searchParams.toString(),
        pathname,
        paramsToUpdate: [
          {
            name: 'category',
            value: slug,
          },
        ],
      }),
    );
  };

  return <CategoriesNavbar categories={categories} handleClick={handleClick} />;
}
