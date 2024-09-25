'use client';

import { useRef } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useFindGroupQuery } from '@/generated/graphql';
import { filterCategories } from '@/lib/group/filter-categories';
import InfiniteScrollSelector from '../selectors/infinite-scroll-selector';

export default function CategorySelector({
  groupId,
  categoryTypes,
  handleClick,
  selectedId,
}: {
  groupId?: string;
  categoryTypes?: string[];
  handleClick: (id: string) => void;
  selectedId: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (e: SelectChangeEvent) => {
    const id = e.target.value;
    handleClick(id);
  };

  const { data } = useFindGroupQuery({
    variables: {
      id: groupId,
    },
    fetchPolicy: 'cache-first',
  });
  const group = data?.findGroup;

  const categories = filterCategories({
    types: categoryTypes,
    categories: group?.categories || [],
  });

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
