'use client';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

const options = [
  { value: 'offers', label: '판매' },
  { value: 'demands', label: '구매' },
  { value: 'swaps', label: '교환' },
];

export default function TypeSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategoryId = searchParams.get('categoryId');
  const type = pathname.split('/').at(-1);

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(
      `${pathname
        .split('/')
        .slice(0, -1)
        .join('/')}/${value}?categoryId=${selectedCategoryId}`,
    );
  };

  const selectedValue = useMemo(
    () => options.find((o) => o.value === type ?? 'offers')?.value ?? 'offers',
    [type],
  );

  return (
    <Select
      id="type-selector"
      placeholder="판매"
      value={selectedValue}
      onChange={handleChange}
      inputProps={{
        className: 'py-2',
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
