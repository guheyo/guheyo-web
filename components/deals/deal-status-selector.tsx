'use client';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { DEAL_STATUS_OPTIONS } from './deal.constants';

export default function DealStatusSelector({
  status,
}: {
  status: string | null;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(`${pathname}?status=${value}`);
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
