'use client';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useCreateQueryString } from '@/hooks/use-create-query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Option } from '@/interfaces/selector.interfaces';

export default function QuerySelector({
  queryKey,
  defaultValue,
  options,
  inputClassName,
}: {
  queryKey: string;
  defaultValue: string;
  options: Option[];
  inputClassName: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryString();
  const serachParams = useSearchParams();
  const status = serachParams.get(queryKey);

  if (!status) {
    router.push(`${pathname}?${createQueryString(queryKey, defaultValue)}`);
  }

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(`${pathname}?${createQueryString(queryKey, value)}`);
  };
  return (
    <Select
      id={`${queryKey}-selector`}
      placeholder={options[0].label}
      value={status || defaultValue}
      onChange={handleChange}
      inputProps={{
        className: inputClassName,
      }}
      sx={{
        color: '#f2f3ed',
        fontWeight: 'bold',
      }}
    >
      {options.map(({ value, label }, i) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}
