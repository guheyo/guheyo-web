'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { useInfiniteUsers } from '@/hooks/use-infinite-users';
import {
  FindUsersOrderByArgs,
  FindUsersWhereArgs,
} from '@/interfaces/user.interfaces';
import { CheckboxFormValues } from '@/lib/search/search.types';
import UserPreview from './user-preview';

const {
  theme: { colors },
} = tailwindConfig;

function UserCheckboxResults({
  where,
  orderBy,
  keyword,
  userIdToExclude,
  control,
  handleOfferSelection,
}: {
  where: FindUsersWhereArgs;
  orderBy?: FindUsersOrderByArgs;
  keyword?: string;
  userIdToExclude?: string;
  control: Control<CheckboxFormValues>;
  handleOfferSelection: (seletedId: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { field } = useController({ name: 'selectedId', control });
  const { loading, data } = useInfiniteUsers({
    ref,
    where,
    orderBy: {
      createdAt: orderBy?.createdAt || 'asc',
    },
    keyword,
    take: 12,
  });

  const handleClick = (userId: string) => {
    handleOfferSelection(userId);
  };

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findUsers) return <div />;

  const edges = data.findUsers.edges.filter(
    (edge) => edge.node.id !== userIdToExclude,
  );
  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-row">
          <Checkbox
            style={{ color: colors['light-200'] }}
            checked={edge.node.id === field.value}
            onChange={() => handleClick(edge.node.id)}
          />
          <div className="w-full">
            <UserPreview
              key={edge.node.id}
              username={edge.node.username}
              avatarURL={edge.node.avatarURL}
              about={edge.node.about}
            />
          </div>
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default UserCheckboxResults;
