'use client';

import { guildVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import SwapFeed from '@/components/swaps/swap-feed';

export interface SwapsPageProps {
  params: {
    guildSlug: string;
    categorySlug: string;
  };
}

function SwapsPage({ params: { guildSlug, categorySlug } }: SwapsPageProps) {
  const guild = useReactiveVar(guildVar);
  const category = guild?.productCategories.find(
    (c) => c.slug === categorySlug,
  );

  if (!guild || !category) return <div>null</div>;
  return <SwapFeed categoryId={category.id} />;
}

export default SwapsPage;
