'use client';

import { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  const { field } = useController({ name: 'selectedId', control });
  const { loading, data } = useInfiniteBidders({
    ref,
    where,
    orderBy: {
      createdAt: orderBy?.createdAt || 'desc',
    },
    keyword,
    take: 12,
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
      <div ref={ref} className="h-1" />
    </>
  );
}

export default BidderCheckboxResults;
