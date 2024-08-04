'use client';

import { MouseEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { useGroup } from '@/hooks/use-group';
import { CategorySummary } from '@/lib/category/category.interfaces';
import CategoriesNavbar from '../categories/categories-navbar';

export default function CommunityCategoriesNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { group } = useGroup('root');
  let categories: CategorySummary[] =
    group?.categories.filter((category) => category.type === 'community') || [];

  categories = [
    ...categories,
    {
      name: '거래 후기',
      slug: 'review',
    },
  ];

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
