'use client';

import OfferFeed from '@/components/offers/offer-feed';
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
    <ThumbnailFeedLayout>
      <Suspense>
        <OfferFeed
          type="thumbnail"
          defaultWhere={where}
          defaultDistinct={distinct}
        />
      </Suspense>
    </ThumbnailFeedLayout>
  );
}

export default Page;
