'use client';

import { Deal, dealVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import { SelectChangeEvent } from '@mui/material';
import { useCreateQueryString } from '@/hooks/use-create-query-string';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { DEAL_OPTIONS } from './deal.constants';
import BaseSelector from '../selectors/base-selector';

export default function DealSelector({
  categorySlug,
}: {
  categorySlug: string | null;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const deal = useReactiveVar(dealVar);
  const createQueryString = useCreateQueryString();

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    dealVar(value as Deal);
    router.push(
      `${pathname
        .split('/')
        .slice(0, -1)
        .join('/')}/${value}?${createQueryString('category', categorySlug)}`,
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
