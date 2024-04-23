'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteOfferFeed } from '@/hooks/use-infinite-offer-feed';
import OfferPreview from '@/components/offers/offer-preview';
import {
  FindOffersOrderByArgs,
  FindOffersWhereArgs,
} from '@/interfaces/offer.interfaces';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';

const {
  theme: { colors },
} = tailwindConfig;

function OfferCheckboxResults({
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

  const { loading, data } = useInfiniteOfferFeed({
    ref,
    where: {
      businessFunction: where?.businessFunction,
      status,
      userId: where?.userId,
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
        <div key={edge.node.id} className="flex flex-row">
          <Checkbox style={{ color: colors['light-200'] }} />
          <div className="w-full">
            <OfferPreview offer={edge.node} type={type} />
          </div>
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default OfferCheckboxResults;
