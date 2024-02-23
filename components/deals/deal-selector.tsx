'use client';

import { Deal, dealVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useCreateQueryString } from '@/hooks/use-create-query-string';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { DEAL_OPTIONS } from './deal.constants';

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
    <Select
      id="type-selector"
      placeholder="판매"
      value={deal}
      onChange={handleChange}
      inputProps={{
        className: 'px-3 py-2 text-xs md:text-base',
      }}
      sx={{
        color: '#f2f3ed',
        fontWeight: 'bold',
      }}
    >
      {DEAL_OPTIONS.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}
