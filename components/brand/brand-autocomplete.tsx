'use client';

import { SyntheticEvent, useRef } from 'react';
import { useInfiniteBrands } from '@/hooks/use-infinite-brands';
import { useSearchParams } from 'next/navigation';
import { Option } from '@/interfaces/selector.interfaces';
import {
  DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE,
  DEFAULT_AUTOCOMPLETE_INPUT_STYLE,
  DEFAULT_AUTOCOMPLETE_STYLE,
} from '@/lib/input/input.styles';
import { getSelectedValue } from '@/lib/option/get-selected-value';
import InfiniteScrollAutocomplete from '../autocomplete/infinite-scroll-autocomplete';

export default function BrandAutocomplete({
  groupId,
  handleClick,
  selectedId,
}: {
  groupId?: string;
  handleClick: (id: string) => void;
  selectedId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const handleChange = (e: SyntheticEvent, value: Option | null) => {
    const id = value?.value || '';
    handleClick(id);
  };

  const { loading, data } = useInfiniteBrands({
    ref,
    where: {
      groupId,
    },
    orderBy: {
      follower: 'desc',
    },
    keyword,
    target,
    take: 12,
  });
  const brands = data?.findBrands.edges;

  if (loading || !brands) return <div />;

  const options = [
    {
      value: '',
      label: '없음',
    },
    ...brands.map((brand) => ({
      value: brand.node.id,
      label: brand.node.name,
    })),
  ];

  return (
    <InfiniteScrollAutocomplete
      name="brand"
      placeholder="브랜드"
      selectedValue={getSelectedValue(options, selectedId)}
      options={options}
      className={DEFAULT_AUTOCOMPLETE_STYLE}
      inputClassName={DEFAULT_AUTOCOMPLETE_INPUT_STYLE}
      inputLabelClassName={DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE}
      ref={ref}
      handleChange={handleChange}
    />
  );
}
