'use client';

import { MouseEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { useGroup } from '@/hooks/use-group';
import CategoriesNavbar from './categories-navbar';

export default function ProductCategoriesNavbar({
  types,
}: {
  types: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { group } = useGroup();
  const categories =
    group?.categories.filter((category) => types.includes(category.type)) || [];

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
