'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import SwapFeed from '@/components/swaps/swap-feed';

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

  if (!group || !category) return <div>null</div>;
  return <SwapFeed categoryId={category.id} status="OPEN" />;
}

export default SwapsPage;
