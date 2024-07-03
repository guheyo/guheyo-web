'use client';

import { MouseEvent } from 'react';
import createQueryString from '@/lib/query-string/create-query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CategoriesNavbar from '../categories/categories-navbar';

export default function CommunityCategoriesNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  return <CategoriesNavbar types={['community']} handleClick={handleClick} />;
}
