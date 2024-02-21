'use client';

import OfferPreview from '@/components/offers/offer-preview';
import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteOfferFeed } from '@/hooks/use-infinite-offer-feed';

function OfferFeed({
  categoryId,
  sellerId,
  status,
  keyword,
}: {
  categoryId?: string;
  sellerId?: string;
  status?: string;
  keyword?: string,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteOfferFeed({
    ref,
    categoryId,
    sellerId,
    status,
    keyword,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findOfferPreviews) return <div />;

  const { edges } = data.findOfferPreviews;

  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-1" key={edge.node.id}>
          <OfferPreview offer={edge.node} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default OfferFeed;
