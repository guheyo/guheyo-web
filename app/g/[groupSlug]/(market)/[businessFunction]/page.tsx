'use client';

import OfferFeed from '@/components/offers/offer-feed';
import OfferHomeFeedLayout from '@/components/offers/offer-home-feed.layout';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { Suspense } from 'react';

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
      <Suspense>
        <OfferHomeFeedLayout
          businessFunction={businessFunction}
          showCategories
          showSelectors
          showMoreLink={false}
        >
          <OfferFeed
            type="listview"
            defaultWhere={where}
            defaultDistinct={distinct}
          />
        </OfferHomeFeedLayout>
      </Suspense>
    );
  }

  return (
    <Suspense>
      <OfferHomeFeedLayout
        businessFunction={businessFunction}
        showCategories
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

export default OffersPage;
