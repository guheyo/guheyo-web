'use client';

import { useRef } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { CategoryResponse } from '@/generated/graphql';
import InfiniteScrollSelector from '../selectors/infinite-scroll-selector';

export default function CategorySelector({
  categories,
  handleClick,
  selectedId,
}: {
  categories: CategoryResponse[];
  handleClick: (id: string) => void;
  selectedId: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (e: SelectChangeEvent) => {
    const id = e.target.value;
    handleClick(id);
  };

  return (
    <InfiniteScrollSelector
      name="category"
      placeholder="카테고리"
      selectedValue={selectedId}
      options={categories.map((category) => ({
        value: category.id,
        label: category.name,
      }))}
      inputClassName="text-[10px] md:text-xs font-medium"
      ref={ref}
      handleChange={handleChange}
    />
  );
}
