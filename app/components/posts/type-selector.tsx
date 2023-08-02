'use client';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

const options = [
  { value: 'sell', label: '판매' },
  { value: 'buy', label: '구매' },
  { value: 'trade', label: '교환' },
];

export default function TypeSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(`${pathname}?type=${value}`);
  };

  const selectedValue = useMemo(
    () =>
      options.find((o) => o.value === searchParams.get('type') ?? 'sell')!
        .value,
    [searchParams],
  );

  useEffect(() => {
    if (!searchParams.has('type')) {
      router.replace(`${pathname}?type=sell`);
    }
  }, [pathname, router, searchParams]);

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
