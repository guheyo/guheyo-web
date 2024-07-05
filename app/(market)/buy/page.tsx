'use client';

import OfferFeed from '@/components/offers/offer-feed';
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
    <TextFeedLayout>
      <Suspense>
        <OfferFeed
          type="listview"
          defaultWhere={where}
          defaultDistinct={distinct}
        />
      </Suspense>
    </TextFeedLayout>
  );
}

export default Page;
