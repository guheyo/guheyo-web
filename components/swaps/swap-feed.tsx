'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteSwapFeed } from '@/hooks/use-infinite-swap-feed';
import SwapPreview from '@/components/swaps/swap-preview-preview';
import {
  FindSwapsWhereArgs,
  FindDealsOrderByArgs,
} from '@/interfaces/deal.interfaces';
import { useGroup } from '@/hooks/use-group';
import { useProductCategory } from '@/hooks/use-product-category';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDateString } from '@/lib/date/date.converter';

function SwapFeed({
  where,
  orderBy,
  keyword,
  type,
}: {
  where?: FindSwapsWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
  type: 'text' | 'thumbnail';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const category = useProductCategory();
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'OPEN';
  const distinct = searchParams.get('distinct') !== 'false';
  const period = searchParams.get('period');
  const from = convertPeriodToDateString(period);

  const { loading, data } = useInfiniteSwapFeed({
    ref,
    where: {
      groupId: group?.id,
      productCategoryId: category?.id,
      status: status || undefined,
      proposerId: where?.proposerId,
      createdAt: {
        gt: from,
      },
    },
    orderBy: {
      createdAt: orderBy?.createdAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findSwapPreviews) return <div />;

  const { edges } = data.findSwapPreviews;

  return (
    <>
      {edges.map((edge) => (
        <SwapPreview key={edge.node.id} swap={edge.node} type={type} />
      ))}
      <div ref={ref} />
    </>
  );
}

export default SwapFeed;
