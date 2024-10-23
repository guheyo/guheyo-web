'use client';

import { SyntheticEvent, useEffect, useRef } from 'react';
import { useFindGroupQuery } from '@/generated/graphql';
import { filterCategories } from '@/lib/group/filter-categories';
import { findDefaultCategory } from '@/lib/group/find-default-category';
import {
  DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE,
  DEFAULT_AUTOCOMPLETE_INPUT_STYLE,
  DEFAULT_AUTOCOMPLETE_STYLE,
} from '@/lib/input/input.styles';
import { Option } from '@/interfaces/selector.interfaces';
import { getSelectedValue } from '@/lib/option/get-selected-value';
import InfiniteScrollAutocomplete from '../autocomplete/infinite-scroll-autocomplete';

export default function CategoryAutocomplete({
  groupId,
  categoryTypes,
  handleClick,
  selectedId,
  setCategoryId,
}: {
  groupId?: string;
  categoryTypes?: string[];
  handleClick: (id: string) => void;
  selectedId?: string;
  setCategoryId: (id?: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (e: SyntheticEvent, value: Option | null) => {
    const id = value?.value || '';
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
      setCategoryId(findDefaultCategory(categories)?.id || undefined);
    }
  }, [selectedId, setCategoryId, categories]);

  const options = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const selectedValue = getSelectedValue(options, selectedId);

  return (
    <InfiniteScrollAutocomplete
      name="category"
      placeholder="카테고리"
      selectedValue={selectedValue}
      options={options}
      className={DEFAULT_AUTOCOMPLETE_STYLE}
      inputClassName={DEFAULT_AUTOCOMPLETE_INPUT_STYLE}
      inputLabelClassName={DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE}
      ref={ref}
      handleChange={handleChange}
    />
  );
}
