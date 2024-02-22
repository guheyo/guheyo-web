'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import OfferFeed from '@/components/offers/offer-feed';
import { useDealStatus } from '@/hooks/use-deal-status';

export interface OffersPageProps {
  params: {
    groupSlug: string;
    categorySlug: string;
  };
}

function OffersPage({ params: { groupSlug, categorySlug } }: OffersPageProps) {
  const group = useReactiveVar(groupVar);
  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );
  const status = useDealStatus();

  if (!group || !category) return <div />;
  return (
    <OfferFeed categoryId={category.id} status={status!} type="thumbnail" />
  );
}

export default OffersPage;
