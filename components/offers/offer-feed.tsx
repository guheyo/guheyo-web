'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteOfferFeed } from '@/hooks/use-infinite-offer-feed';
import OfferPreview from '@/components/offers/offer-preview';
import {
  FindOffersWhereArgs,
  FindDealsOrderByArgs,
} from '@/interfaces/deal.interfaces';
import { useGroup } from '@/hooks/use-group';
import { useProductCategory } from '@/hooks/use-product-category';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDate } from '@/lib/date/date.converter';

function OfferFeed({
  where,
  orderBy,
  keyword,
  type,
}: {
  where?: FindOffersWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
  type: 'text' | 'thumbnail';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const category = useProductCategory();
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'OPEN';
  const distinct = searchParams.get('distinct') !== 'false';
  const period = searchParams.get('period');
  const from = convertPeriodToDate(period);

  const { loading, data } = useInfiniteOfferFeed({
    ref,
    where: {
      groupId: group?.id,
      productCategoryId: category?.id,
      status: status || undefined,
      sellerId: where?.sellerId,
      createdAt: {
        gt: from,
      },
    },
    orderBy: {
      createdAt: orderBy?.createdAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findOfferPreviews) return <div />;

  const { edges } = data.findOfferPreviews;
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
