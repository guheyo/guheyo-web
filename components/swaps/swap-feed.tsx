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
import { useDealStatus } from '@/hooks/use-deal-status';
import { useDistinct } from '@/hooks/use-distinct';

function SwapFeed({
  where,
  orderBy,
  keyword,
}: {
  where?: FindSwapsWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const category = useProductCategory();
  const status = useDealStatus();
  const distinct = useDistinct();

  const { loading, data } = useInfiniteSwapFeed({
    ref,
    where: {
      groupId: group?.id,
      productCategoryId: category?.id,
      status: status || undefined,
      proposerId: where?.proposerId,
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
        <SwapPreview key={edge.node.id} swap={edge.node} type="thumbnail" />
      ))}
      <div ref={ref} />
    </>
  );
}

export default SwapFeed;
