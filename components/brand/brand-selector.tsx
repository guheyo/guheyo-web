'use client';

import { useRef } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useInfiniteBrands } from '@/hooks/use-infinite-brands';
import { useSearchParams } from 'next/navigation';
import InfiniteScrollSelector from '../selectors/infinite-scroll-selector';

export default function BrandSelector({
  groupId,
  handleClick,
  selectedId,
}: {
  groupId?: string;
  handleClick: (id: string) => void;
  selectedId: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const handleChange = (e: SelectChangeEvent) => {
    const id = e.target.value;
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
    <InfiniteScrollSelector
      name="brand"
      placeholder="브랜드"
      selectedValue={selectedId}
      options={options}
      inputClassName="text-[10px] md:text-xs font-medium"
      ref={ref}
      handleChange={handleChange}
    />
  );
}
