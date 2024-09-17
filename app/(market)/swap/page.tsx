'use client';

import OfferFeed from '@/components/offers/offer-feed';
import OfferHomeFeedLayout from '@/components/offers/offer-home-feed.layout';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { Suspense } from 'react';

function Page() {
  const where = {
    businessFunction: 'swap' as BusinessFunction,
    status: undefined,
  };
  const distinct = true;

  return (
    <Suspense>
      <OfferHomeFeedLayout
        businessFunction="swap"
        showChannels
        showCategories={false}
        showSelectors
        showMoreLink={false}
      >
        <OfferFeed
          type="thumbnail"
          defaultWhere={where}
          defaultDistinct={distinct}
        />
      </OfferHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
