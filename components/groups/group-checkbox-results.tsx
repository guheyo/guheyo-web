'use client';

import { Mocks } from '@/components/mock/mock';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useSearchParams } from 'next/navigation';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import { ComponentSize } from '@/lib/component/component.types';
import GroupProfile from './group-profile';

const {
  theme: { colors },
} = tailwindConfig;

function GroupCheckboxResults({
  control,
  handleCheckboxClick,
  size,
}: {
  control: Control<CheckboxFormValues>;
  handleCheckboxClick: (seletedId: string) => void;
  size: ComponentSize;
}) {
  const { field } = useController({ name: 'selectedIds', control });
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { setRef, loading, data } = useInfiniteGroupProfiles({
    orderBy: {
      position: 'asc',
    },
    keyword,
    target,
    take: 12,
  });

  const handleClick = (groupId: string) => {
    handleCheckboxClick(groupId);
  };

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findGroupProfiles) return <div />;

  const { edges } = data.findGroupProfiles;

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-row">
          <Checkbox
            style={{ color: colors['light-200'] }}
            checked={field.value.includes(edge.node.id)}
            onChange={() => handleClick(edge.node.id)}
          />
          <div className="w-full">
            <GroupProfile
              name={edge.node.name}
              icon={edge.node.icon}
              description={edge.node.description}
              size={size}
            />
          </div>
        </div>
      ))}
      <div ref={setRef} className="h-1" />
    </>
  );
}

export default GroupCheckboxResults;
