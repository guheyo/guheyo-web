'use client';

import { useEffect, useRef } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useFindGroupQuery } from '@/generated/graphql';
import { filterCategories } from '@/lib/group/filter-categories';
import { findDefaultCategory } from '@/lib/group/find-default-category';
import InfiniteScrollSelector from '../selectors/infinite-scroll-selector';

export default function CategorySelector({
  groupId,
  categoryTypes,
  handleClick,
  selectedId,
  setCategoryId,
}: {
  groupId?: string;
  categoryTypes?: string[];
  handleClick: (id: string) => void;
  selectedId: string;
  setCategoryId: (id: string) => void;
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

  useEffect(() => {
    if (!selectedId) {
      setCategoryId(findDefaultCategory(categories)?.id || '');
    }
  }, [selectedId, setCategoryId, categories]);

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
