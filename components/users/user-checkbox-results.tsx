'use client';

import { useContext, useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { useInfiniteUsers } from '@/hooks/use-infinite-users';
import { CheckboxFormValues } from '@/lib/search/search.types';
import {
  FindUsersOrderByInput,
  FindUsersWhereInput,
} from '@/generated/graphql';
import UserPreview from './user-preview';
import { AuthContext } from '../auth/auth.provider';

const {
  theme: { colors },
} = tailwindConfig;

function UserCheckboxResults({
  where,
  orderBy,
  keyword,
  userIdToExclude,
  control,
  handleCheckboxClick,
}: {
  where: FindUsersWhereInput;
  orderBy?: FindUsersOrderByInput;
  keyword?: string;
  userIdToExclude?: string;
  control: Control<CheckboxFormValues>;
  handleCheckboxClick: (seletedId: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { field } = useController({ name: 'selectedIds', control });
  const { loading: authLoading } = useContext(AuthContext);

  const { loading, data } = useInfiniteUsers({
    ref,
    where,
    orderBy: {
      createdAt: orderBy?.createdAt || 'asc',
    },
    keyword,
    take: 12,
    skip: authLoading,
  });

  const handleClick = (userId: string) => {
    handleCheckboxClick(userId);
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
            checked={field.value.includes(edge.node.id)}
            onChange={() => handleClick(edge.node.id)}
          />
          <div className="w-full">
            <UserPreview
              key={edge.node.id}
              userId={edge.node.id}
              username={edge.node.username}
              avatarURL={edge.node.avatarURL}
              about={edge.node.about}
              followed={edge.node.followed}
            />
          </div>
        </div>
      ))}
      <div ref={ref} className="h-1" />
    </>
  );
}

export default UserCheckboxResults;
