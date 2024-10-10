'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useInfiniteAuctionFeed } from '@/hooks/use-infinite-auction-feed';
import { PostPreviewType } from '@/lib/post/post.types';
import {
  FindAuctionPreviewsOrderByInput,
  FindAuctionPreviewsWhereInput,
} from '@/generated/graphql';
import { useSearchParams } from 'next/navigation';
import AuctionPreview from './auction-preview';

const {
  theme: { colors },
} = tailwindConfig;

function AuctionCheckboxResults({
  where,
  orderBy,
  type,
  distinct,
  control,
  handleCheckboxClick,
}: {
  where: FindAuctionPreviewsWhereInput;
  orderBy?: FindAuctionPreviewsOrderByInput;
  type: PostPreviewType;
  distinct: boolean;
  control: Control<CheckboxFormValues>;
  handleCheckboxClick: (seletedId: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { field } = useController({ name: 'selectedIds', control });
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, data } = useInfiniteAuctionFeed({
    ref,
    where: {
      status: where.status,
      userId: where.userId,
      bidderId: where.bidderId,
    },
    orderBy: {
      createdAt: orderBy?.createdAt || 'desc',
      extendedEndDate: orderBy?.extendedEndDate,
      currentBidPrice: orderBy?.currentBidPrice,
    },
    keyword,
    target,
    distinct,
    take: 12,
  });

  const handleClick = (auctionId: string) => {
    handleCheckboxClick(auctionId);
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
            checked={field.value.includes(edge.node.id)}
            onChange={() => handleClick(edge.node.id)}
          />
          <div className="w-full">
            <AuctionPreview type={type} auction={edge.node} displayGroup />
          </div>
        </div>
      ))}
      <div ref={ref} className="h-1" />
    </>
  );
}

export default AuctionCheckboxResults;
