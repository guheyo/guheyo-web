'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteSwapFeed } from '@/hooks/use-infinite-swap-feed';
import SwapPreview from '@/components/swaps/swap-preview';
import {
  FindSwapsWhereArgs,
  FindDealsOrderByArgs,
} from '@/interfaces/deal.interfaces';
import { useGroup } from '@/hooks/use-group';
import { useSearchParams } from 'next/navigation';
import { findProductCategory } from '@/lib/group/find-product-category';
import { convertPeriodToDateString } from '@/lib/date/date.converter';

function SwapFeed({
  where,
  orderBy,
  keyword,
  type,
  status,
  distinct,
}: {
  where?: FindSwapsWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
  type: 'text' | 'thumbnail';
  status?: string;
  distinct: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const isHidden = searchParams.get('isHidden') === true.toString();
  const period = searchParams.get('period');
  const category = findProductCategory(group?.productCategories, {
    slug: categorySlug,
  });

  const { loading, data } = useInfiniteSwapFeed({
    ref,
    where: {
      groupId: group?.id,
      productCategoryId: category?.id,
      status,
      isHidden,
      proposerId: where?.proposerId,
      bumpedAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: {
      bumpedAt: orderBy?.bumpedAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findSwapPreviews) return <div />;

  const edges = data.findSwapPreviews.edges.filter((edge) =>
    status ? edge.node.status === status : true,
  );
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
