'use client';

import { useRef } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import InfiniteScrollSelector from '../selectors/infinite-scroll-selector';

export default function GroupSelector({
  handleClick,
  selectedId,
}: {
  handleClick: (id: string) => void;
  selectedId: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, data } = useInfiniteGroupProfiles({
    ref,
    orderBy: {
      position: 'asc',
    },
    keyword,
    target,
    take: 12,
  });

  const groupProfiles = data?.findGroupProfiles.edges;
  if (loading || !groupProfiles) return <div />;

  const handleChange = (e: SelectChangeEvent) => {
    const id = e.target.value;
    handleClick(id);
  };

  return (
    <InfiniteScrollSelector
      name="group"
      placeholder="그룹"
      selectedValue={selectedId}
      options={groupProfiles.map((groupProfile) => ({
        value: groupProfile.node.id,
        label: groupProfile.node.name,
        imageUrl: groupProfile.node.icon || undefined,
      }))}
      inputClassName="text-[10px] md:text-xs font-medium"
      ref={ref}
      handleChange={handleChange}
    />
  );
}
