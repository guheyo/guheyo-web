'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import SwapFeed from '@/components/swaps/swap-feed';
import { useDealStatus } from '@/hooks/use-deal-status';

export interface SwapsPageProps {
  params: {
    groupSlug: string;
    categorySlug: string;
  };
}

function SwapsPage({ params: { groupSlug, categorySlug } }: SwapsPageProps) {
  const group = useReactiveVar(groupVar);
  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );
  const status = useDealStatus();

  if (!group || !category) return <div>null</div>;
  return <SwapFeed categoryId={category.id} status={status!} />;
}

export default SwapsPage;
