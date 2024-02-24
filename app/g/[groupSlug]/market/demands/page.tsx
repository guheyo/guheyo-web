'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import DemandFeed from '@/components/demands/demand-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useSearchParams } from 'next/navigation';
import {
  FindDealsOrderByArgs,
  FindDemandsWhereArgs,
} from '@/interfaces/deal.interfaces';

export interface DemandsPageProps {
  params: {
    groupSlug: string;
  };
}

function DemandsPage({ params: { groupSlug } }: DemandsPageProps) {
  const group = useReactiveVar(groupVar);
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );
  const status = useDealStatus();

  if (!group) return <div />;

  const where: FindDemandsWhereArgs = {
    groupId: group.id,
    productCategoryId: category?.id,
    status: status || undefined,
  };
  const orderBy: FindDealsOrderByArgs = {
    createdAt: 'desc',
  };

  return <DemandFeed where={where} orderBy={orderBy} />;
}

export default DemandsPage;
