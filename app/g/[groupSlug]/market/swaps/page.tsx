'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import SwapFeed from '@/components/swaps/swap-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useSearchParams } from 'next/navigation';
import {
  FindDealsOrderByArgs,
  FindDealsWhereArgs,
} from '@/interfaces/deal.interfaces';

export interface SwapsPageProps {
  params: {
    groupSlug: string;
  };
}

function SwapsPage({ params: { groupSlug } }: SwapsPageProps) {
  const group = useReactiveVar(groupVar);
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );
  const status = useDealStatus();

  if (!group) return <div />;

  const where: FindDealsWhereArgs = {
    groupId: group.id,
    productCategoryId: category?.id,
    status: status!,
  };
  const orderBy: FindDealsOrderByArgs = {
    createdAt: 'desc',
  };

  return <SwapFeed where={where} orderBy={orderBy} />;
}

export default SwapsPage;
