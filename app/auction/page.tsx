'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import AuctionHomeFeedLayout from '@/components/auction/auction-home-feed.layout';
import { Suspense } from 'react';

function Page() {
  const where = {};
  const sortOrder = undefined;
  const distinct = false;

  return (
    <Suspense>
      <AuctionHomeFeedLayout showCategories={false} showSelectors>
        <AuctionFeed
          type="thumbnail"
          defaultWhere={where}
          defaultSortOrder={sortOrder}
          defaultDistinct={distinct}
        />
      </AuctionHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
