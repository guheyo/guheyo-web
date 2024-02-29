'use client';

import { SelectChangeEvent } from '@mui/material';
import { useCreateQueryString } from '@/hooks/use-create-query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { DEAL_OPTIONS } from './deal.constants';
import BaseSelector from '../selectors/base-selector';

export default function DealSelector({
  categorySlug,
}: {
  categorySlug: string | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const deal = pathname.split('/').at(-1) || 'offers';
  const createQueryString = useCreateQueryString();

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(
      `${pathname
        .split('/')
        .slice(0, -1)
        .join('/')}/${value}?${createQueryString(
        searchParams,
        'category',
        categorySlug,
      )}`,
    );
  };

  return (
    <BaseSelector
      name="deal"
      selectedValue={deal}
      options={DEAL_OPTIONS}
      inputClassName="className: 'px-3 py-2 text-xs md:text-base"
      handleChange={handleChange}
    />
  );
}
