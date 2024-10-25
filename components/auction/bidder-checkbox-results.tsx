'use client';

import { useContext } from 'react';
import { Mocks } from '@/components/mock/mock';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useInfiniteBidders } from '@/hooks/use-infinite-bidders';
import {
  FindBiddersOrderByInput,
  FindBiddersWhereInput,
} from '@/generated/graphql';
import UserPreview from '../users/user-preview';
import { AuthContext } from '../auth/auth.provider';

const {
  theme: { colors },
} = tailwindConfig;

function BidderCheckboxResults({
  where,
  orderBy,
  keyword,
  userIdToExclude,
  control,
  handleCheckboxClick,
}: {
  where: FindBiddersWhereInput;
  orderBy?: FindBiddersOrderByInput;
  keyword?: string;
  userIdToExclude?: string;
  control: Control<CheckboxFormValues>;
  handleCheckboxClick: (seletedId: string) => void;
}) {
  const { field } = useController({ name: 'selectedIds', control });
  const { loading: authLoading } = useContext(AuthContext);

  const { setRef, loading, data } = useInfiniteBidders({
    where,
    orderBy: {
      createdAt: orderBy?.createdAt || 'desc',
    },
    keyword,
    take: 12,
    skip: authLoading,
  });

  const handleClick = (userId: string) => {
    handleCheckboxClick(userId);
  };

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findBidders) return <div />;

  const edges = data.findBidders.edges.filter(
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
              displayFollow
            />
          </div>
        </div>
      ))}
      <div ref={setRef} className="h-1" />
    </>
  );
}

export default BidderCheckboxResults;
