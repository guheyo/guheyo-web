'use client';

import { MouseEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import CategoriesNavbar from './categories-navbar';

export default function ProductCategoriesNavbar({
  types,
}: {
  types: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  return <CategoriesNavbar types={types} handleClick={handleClick} />;
}
