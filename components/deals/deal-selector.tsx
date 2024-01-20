'use client';

import { Deal, dealVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const options = [
  { value: 'offers', label: '판매' },
  { value: 'demands', label: '구매' },
  { value: 'swaps', label: '교환' },
];

export default function DealSelector({
  categorySlug,
}: {
  categorySlug: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const deal = useReactiveVar(dealVar);

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    dealVar(value as Deal);
    router.push(
      `${pathname.split('/').slice(0, -2).join('/')}/${value}/${categorySlug}`,
    );
  };

  return (
    <Select
      id="type-selector"
      placeholder="판매"
      value={deal}
      onChange={handleChange}
      inputProps={{
        className: 'py-2',
      }}
      sx={{
        color: '#f2f3ed',
        fontWeight: 'bold',
      }}
    >
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}
