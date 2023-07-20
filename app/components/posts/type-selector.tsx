'use client';

import { setPostType } from '@/redux/features/posts-slice';
import { useAppDispatch } from '@/redux/hooks';
import React, { memo, useCallback } from 'react';
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

const TypeSelector = () => {
  const dispatch = useAppDispatch();
  const handleChange = useCallback(
    (option: Option | null): void => {
      if (!option) return;
      dispatch(setPostType(option.value));
    },
    [dispatch],
  );

  return (
    <Select
      instanceId="type-selector"
      options={options}
      placeholder="판매"
      onChange={handleChange}
    />
  );
};

export default memo(TypeSelector);
