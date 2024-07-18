'use client';

import OfferFeed from '@/components/offers/offer-feed';
import OfferHomeFeedLayout from '@/components/offers/offer-home-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { Suspense } from 'react';

function Page() {
  const where = {
    businessFunction: 'sell' as BusinessFunction,
    status: undefined,
  };
  const distinct = true;

  return (
    <Suspense>
      <OfferHomeFeedLayout businessFunction="sell">
        <ThumbnailFeedLayout>
          <OfferFeed
            type="thumbnail"
            defaultWhere={where}
            defaultDistinct={distinct}
          />
        </ThumbnailFeedLayout>
      </OfferHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
