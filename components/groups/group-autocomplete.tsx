'use client';

import { SyntheticEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import { FindGroupProfilesWhereInput } from '@/generated/graphql';
import { Option } from '@/interfaces/selector.interfaces';
import {
  DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE,
  DEFAULT_AUTOCOMPLETE_INPUT_STYLE,
  DEFAULT_AUTOCOMPLETE_STYLE,
} from '@/lib/input/input.styles';
import { getSelectedValue } from '@/lib/option/get-selected-value';
import InfiniteScrollAutocomplete from '../autocomplete/infinite-scroll-autocomplete';

export default function GroupAutocomplete({
  handleClick,
  defaultWhere,
  selectedId,
}: {
  handleClick: (id: string) => void;
  defaultWhere?: FindGroupProfilesWhereInput;
  selectedId?: string;
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
    take: 100,
  });

  const groupProfiles = data?.findGroupProfiles.edges;

  if (loading || !groupProfiles) return <div />;

  const handleChange = (e: SyntheticEvent, value: Option | null) => {
    const id = value?.value || '';
    handleClick(id);
  };

  const options = groupProfiles.map((groupProfile) => ({
    value: groupProfile.node.id,
    label: groupProfile.node.name,
    imageUrl: groupProfile.node.icon || undefined,
  }));

  const selectedValue = getSelectedValue(options, selectedId);

  return (
    <InfiniteScrollAutocomplete
      name="group"
      placeholder="그룹"
      selectedValue={selectedValue}
      options={options}
      className={DEFAULT_AUTOCOMPLETE_STYLE}
      inputClassName={DEFAULT_AUTOCOMPLETE_INPUT_STYLE}
      inputLabelClassName={DEFAULT_AUTOCOMPLETE_INPUT_LABEL_STYLE}
      setRef={setRef}
      handleChange={handleChange}
    />
  );
}
