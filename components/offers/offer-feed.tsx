'use client';

import { useEffect, useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteOfferFeed } from '@/hooks/use-infinite-offer-feed';
import OfferPreview from '@/components/offers/offer-preview';
import {
  FindOffersOrderByArgs,
  FindOffersWhereArgs,
} from '@/interfaces/offer.interfaces';
import { useGroup } from '@/hooks/use-group';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { findCategory } from '@/lib/group/find-category';

function OfferFeed({
  where,
  orderBy,
  keyword,
  type,
  status,
  distinct,
}: {
  where: FindOffersWhereArgs;
  orderBy?: FindOffersOrderByArgs;
  keyword?: string;
  type: 'text' | 'thumbnail';
  status?: string;
  distinct: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const isArchived = searchParams.get('isArchived') === true.toString();
  const period = searchParams.get('period');
  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });
console.log(where);
  useEffect(() => {}, [searchParams]);

  const { loading, data } = useInfiniteOfferFeed({
    ref,
    where: {
      businessFunction: where?.businessFunction,
      groupId: group?.id,
      categoryId: category?.id,
      status,
      isArchived,
      userId: where?.userId,
      bumpedAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: {
      bumpedAt: orderBy?.bumpedAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findOfferPreviews) return <div />;

  const edges = data.findOfferPreviews.edges.filter((edge) =>
    status ? edge.node.status === status : true,
  );
  return (
    <>
      {edges.map((edge) => (
        <OfferPreview key={edge.node.id} offer={edge.node} type={type} />
      ))}
      <div ref={ref} />
    </>
  );
}

export default OfferFeed;
