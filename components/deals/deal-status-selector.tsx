'use client';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useCreateQueryString } from '@/hooks/use-create-query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { DEAL_STATUS_OPTIONS } from './deal.constants';

export default function DealStatusSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryString();
  const serachParams = useSearchParams();
  const status = serachParams.get('status');

  if (!status) {
    router.push(`${pathname}?${createQueryString('status', 'OPEN')}`);
  }

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(`${pathname}?${createQueryString('status', value)}`);
  };
  return (
    <Select
      id="type-selector"
      placeholder="거래 가능"
      value={status || 'OPEN'}
      onChange={handleChange}
      inputProps={{
        className: 'px-3 py-2 text-xs md:text-base w-16 md:w-20',
      }}
      sx={{
        color: '#f2f3ed',
        fontWeight: 'bold',
      }}
    >
      {DEAL_STATUS_OPTIONS.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}
