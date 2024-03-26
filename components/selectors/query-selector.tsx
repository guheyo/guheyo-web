'use client';

import { SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Option } from '@/interfaces/selector.interfaces';
import createQueryString from '@/lib/query-string/create-query-string';
import BaseSelector from './base-selector';

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
  const searchParams = useSearchParams();
  const queryValue = searchParams.get(queryKey);

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    router.push(
      `${pathname}?${createQueryString({
        searchParamsString: searchParams.toString(),
        name: queryKey,
        value,
      })}`,
    );
  };

  return (
    <BaseSelector
      name={queryKey}
      selectedValue={queryValue || defaultValue}
      options={options}
      inputClassName={inputClassName}
      handleChange={handleChange}
    />
  );
}
