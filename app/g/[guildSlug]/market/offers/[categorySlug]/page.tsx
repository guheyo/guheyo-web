'use client';

import { guildVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import OfferFeed from '@/components/offers/offer-feed';

export interface OffersPageProps {
  params: {
    guildSlug: string;
    categorySlug: string;
  };
}

function OffersPage({ params: { guildSlug, categorySlug } }: OffersPageProps) {
  const guild = useReactiveVar(guildVar);
  const category = guild?.productCategories.find(
    (c) => c.slug === categorySlug,
  );

  if (!guild || !category) return <div>null</div>;
  return <OfferFeed categoryId={category.id} />;
}

export default OffersPage;
