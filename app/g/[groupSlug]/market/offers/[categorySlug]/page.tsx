'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import OfferFeed from '@/components/offers/offer-feed';

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

  if (!group || !category) return <div>null</div>;
  return <OfferFeed categoryId={category.id} />;
}

export default OffersPage;
