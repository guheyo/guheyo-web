'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useInfiniteAuctionFeed } from '@/hooks/use-infinite-auction-feed';
import {
  FindAuctionsOrderByArgs,
  FindAuctionsWhereArgs,
} from '@/lib/auction/auction.interfaces';
import AuctionPreview from './auction-preview';

const {
  theme: { colors },
} = tailwindConfig;

function AuctionCheckboxResults({
  where,
  orderBy,
  keyword,
  distinct,
  control,
  handleSelection,
}: {
  where: FindAuctionsWhereArgs;
  orderBy?: FindAuctionsOrderByArgs;
  keyword?: string;
  distinct: boolean;
  control: Control<CheckboxFormValues>;
  handleSelection: (seletedId: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { field } = useController({ name: 'selectedId', control });
  const { loading, data } = useInfiniteAuctionFeed({
    ref,
    where: {
      status: where.status,
      userId: where.userId,
    },
    orderBy,
    keyword,
    distinct,
    take: 12,
  });

  const handleClick = (auctionId: string) => {
    handleSelection(auctionId);
  };

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findAuctionPreviews) return <div />;

  const edges = data.findAuctionPreviews.edges.filter((edge) =>
    where.status ? edge.node.status === where.status : true,
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
            <AuctionPreview auction={edge.node} isInGroup={false} />
          </div>
        </div>
      ))}
      <div ref={ref} className="h-1" />
    </>
  );
}

export default AuctionCheckboxResults;
