'use client';

import OfferFeed from '@/components/offers/offer-feed';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { BusinessFunction } from '@/lib/offer/offer.types';

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
    status: undefined,
  };
  const distinct = true;

  if (businessFunction === 'buy') {
    return (
      <TextFeedLayout>
        <OfferFeed
          type="listview"
          defaultWhere={where}
          defaultDistinct={distinct}
        />
      </TextFeedLayout>
    );
  }

  return (
    <ThumbnailFeedLayout>
      <OfferFeed
        type="thumbnail"
        defaultWhere={where}
        defaultDistinct={distinct}
      />
    </ThumbnailFeedLayout>
  );
}

export default OffersPage;
