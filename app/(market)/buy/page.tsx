'use client';

import OfferFeed from '@/components/offers/offer-feed';
import OfferHomeFeedLayout from '@/components/offers/offer-home-feed.layout';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { Suspense } from 'react';

function Page() {
  const where = {
    businessFunction: 'buy' as BusinessFunction,
    status: undefined,
  };
  const distinct = true;

  return (
    <Suspense>
      <OfferHomeFeedLayout businessFunction="buy">
        <TextFeedLayout>
          <OfferFeed
            type="listview"
            defaultWhere={where}
            defaultDistinct={distinct}
          />
        </TextFeedLayout>
      </OfferHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
