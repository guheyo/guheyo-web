'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import OfferFeed from '@/components/offers/offer-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useSearchParams } from 'next/navigation';
import {
  FindDealsOrderByArgs,
  FindOffersWhereArgs,
} from '@/interfaces/deal.interfaces';

export interface OffersPageProps {
  params: {
    groupSlug: string;
  };
}

function OffersPage({ params: { groupSlug } }: OffersPageProps) {
  const group = useReactiveVar(groupVar);
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );
  const status = useDealStatus();

  if (!group) return <div />;

  const where: FindOffersWhereArgs = {
    groupId: group.id,
    productCategoryId: category?.id,
    status: status!,
  };
  const orderBy: FindDealsOrderByArgs = {
    createdAt: 'desc',
  };
  return <OfferFeed where={where} orderBy={orderBy} type="thumbnail" />;
}

export default OffersPage;
