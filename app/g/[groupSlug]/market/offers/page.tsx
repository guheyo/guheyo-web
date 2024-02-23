'use client';

import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';
import OfferFeed from '@/components/offers/offer-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useSearchParams } from 'next/navigation';

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
  return (
    <OfferFeed
      groupId={group.id}
      categoryId={category?.id}
      status={status!}
      type="thumbnail"
    />
  );
}

export default OffersPage;
