'use client';

import { setPostType } from '@/redux/features/postsSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';
import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};

const options = [
  { value: 'sell', label: '판매' },
  { value: 'buy', label: '구매' },
  { value: 'trade', label: '교환' },
];

export default function TypeSelector() {
  const dispatch = useAppDispatch();
  const handleChange = (option: Option | null) => {
    if (!option) return;
    dispatch(setPostType(option.value));
  };

  return (
    <Select
      instanceId="type-selector"
      options={options}
      placeholder="판매"
      onChange={handleChange}
    />
  );
}
