'use client';

import OfferFeed from '@/components/offers/offer-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { BusinessFunction } from '@/lib/offer/offer.types';

function Page() {
  const where = {
    businessFunction: 'swap' as BusinessFunction,
    status: undefined,
  };
  const distinct = true;

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

export default Page;
