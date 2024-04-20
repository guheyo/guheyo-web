'use client';

import OfferFeed from '@/components/offers/offer-feed';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { parseOfferStatus } from '@/lib/offer/parse-offer-status';
import { useSearchParams } from 'next/navigation';

export interface OffersPageProps {
  params: {
    groupSlug: string;
    businessFunction: BusinessFunction;
  };
}

function OffersPage({
  params: { groupSlug, businessFunction },
}: OffersPageProps) {
  const where = {
    businessFunction,
  };
  const searchParams = useSearchParams();
  const status = parseOfferStatus({
    status: searchParams.get('status'),
  });
  const distinct = searchParams.get('distinct') !== 'false';

  if (businessFunction === 'buy') {
    return (
      <TextFeedLayout>
        <OfferFeed
          type="text"
          where={where}
          status={status}
          distinct={distinct}
        />
      </TextFeedLayout>
    );
  }

  return (
    <ThumbnailFeedLayout>
      <OfferFeed
        type="thumbnail"
        where={where}
        status={status}
        distinct={distinct}
      />
    </ThumbnailFeedLayout>
  );
}

export default OffersPage;
