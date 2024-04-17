'use client';

import { SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import createQueryString from '@/lib/query-string/create-query-string';
import { OFFER_OPTIONS } from '@/lib/offer/offer.constants';
import BaseSelector from '../selectors/base-selector';

export default function BusinessFunctionSelector({
  categorySlug,
}: {
  categorySlug: string | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const businessFunction = pathname.split('/').at(-1) || 'sell';

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(
      `${pathname
        .split('/')
        .slice(0, -1)
        .join('/')}/${value}?${createQueryString({
        searchParamsString: searchParams.toString(),
        name: 'category',
        value: categorySlug,
      })}`,
    );
  };

  return (
    <BaseSelector
      name="offer"
      selectedValue={businessFunction}
      options={OFFER_OPTIONS}
      inputClassName="className: 'px-3 py-2 text-xs md:text-base"
      handleChange={handleChange}
    />
  );
}
