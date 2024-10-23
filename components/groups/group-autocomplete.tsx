'use client';

import { SyntheticEvent, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import { FindGroupProfilesWhereInput } from '@/generated/graphql';
import { Option } from '@/interfaces/selector.interfaces';
import {
  DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE,
  DEFAULT_AUTOCOMPLETE_INPUT_STYLE,
  DEFAULT_AUTOCOMPLETE_STYLE,
} from '@/lib/input/input.styles';
import InfiniteScrollAutocomplete from '../autocomplete/infinite-scroll-autocomplete';

export default function GroupAutocomplete({
  handleClick,
  defaultWhere,
  selectedId,
  setGroupId,
}: {
  handleClick: (id: string) => void;
  defaultWhere?: FindGroupProfilesWhereInput;
  selectedId?: string;
  setGroupId: (id?: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, data } = useInfiniteGroupProfiles({
    ref,
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

  const handleChange = (e: SyntheticEvent, value: Option | null) => {
    const id = value?.value || '';
    handleClick(id);
  };

  return (
    <InfiniteScrollAutocomplete
      name="group"
      placeholder="그룹"
      selectedValue={
        selectedId ||
        (groupProfiles.length === 1 && groupProfiles[0].node.id) ||
        undefined
      }
      options={groupProfiles.map((groupProfile) => ({
        value: groupProfile.node.id,
        label: groupProfile.node.name,
        imageUrl: groupProfile.node.icon || undefined,
      }))}
      className={DEFAULT_AUTOCOMPLETE_STYLE}
      inputClassName={DEFAULT_AUTOCOMPLETE_INPUT_STYLE}
      inputLabelClassName={DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE}
      ref={ref}
      handleChange={handleChange}
    />
  );
}
