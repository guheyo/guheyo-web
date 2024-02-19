'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import DemandFeed from '@/components/demands/demand-feed';

export interface DemandsPageProps {
  params: {
    groupSlug: string;
    categorySlug: string;
  };
}

function DemandsPage({
  params: { groupSlug, categorySlug },
}: DemandsPageProps) {
  const group = useReactiveVar(groupVar);
  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );

  if (!group || !category) return <div>null</div>;
  return <DemandFeed categoryId={category.id} status="OPEN" />;
}

export default DemandsPage;
