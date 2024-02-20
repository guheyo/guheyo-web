'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import DemandFeed from '@/components/demands/demand-feed';
import { useDealStatus } from '@/hooks/use-deal-status';

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
  const status = useDealStatus();

  if (!group || !category) return <div>null</div>;
  return <DemandFeed categoryId={category.id} status={status!} />;
}

export default DemandsPage;
