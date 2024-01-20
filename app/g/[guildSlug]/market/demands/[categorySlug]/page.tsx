'use client';

import { guildVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import DemandFeed from '@/components/demands/demand-feed';

export interface DemandsPageProps {
  params: {
    guildSlug: string;
    categorySlug: string;
  };
}

function DemandsPage({
  params: { guildSlug, categorySlug },
}: DemandsPageProps) {
  const guild = useReactiveVar(guildVar);
  const category = guild?.productCategories.find(
    (c) => c.slug === categorySlug,
  );

  if (!guild || !category) return <div>null</div>;
  return <DemandFeed categoryId={category.id} />;
}

export default DemandsPage;
