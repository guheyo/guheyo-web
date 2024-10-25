'use client';

import { useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import { FindGroupProfilesWhereInput } from '@/generated/graphql';
import InfiniteScrollSelector from '../selectors/infinite-scroll-selector';

export default function GroupSelector({
  handleClick,
  defaultWhere,
  selectedId,
  setGroupId,
}: {
  handleClick: (id: string) => void;
  defaultWhere?: FindGroupProfilesWhereInput;
  selectedId: string;
  setGroupId: (id: string) => void;
}) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { setRef, loading, data } = useInfiniteGroupProfiles({
    where: {
      ...defaultWhere,
    },
    orderBy: {
      position: 'asc',
    },
    keyword,
    target,
    take: 12,
  });

  const groupProfiles = data?.findGroupProfiles.edges;

  useEffect(() => {
    if (groupProfiles?.length === 1) setGroupId(groupProfiles[0].node.id);
  }, [groupProfiles, groupProfiles?.length, setGroupId]);

  if (loading || !groupProfiles) return <div />;

  const handleChange = (e: SelectChangeEvent) => {
    const id = e.target.value;
    handleClick(id);
  };

  return (
    <InfiniteScrollSelector
      name="group"
      placeholder="그룹"
      selectedValue={
        selectedId ||
        (groupProfiles.length === 1 && groupProfiles[0].node.id) ||
        ''
      }
      options={groupProfiles.map((groupProfile) => ({
        value: groupProfile.node.id,
        label: groupProfile.node.name,
        imageUrl: groupProfile.node.icon || undefined,
      }))}
      inputClassName="text-[10px] md:text-xs font-medium"
      setRef={setRef}
      handleChange={handleChange}
    />
  );
}
