'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import HomeAuctionFeedLayout from '@/components/auction/home-auction-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { Suspense } from 'react';

function Page() {
  const where = {};
  const sortOrder = undefined;
  const distinct = false;

  return (
    <HomeAuctionFeedLayout showSelector>
      <ThumbnailFeedLayout>
        <Suspense>
          <AuctionFeed
            defaultWhere={where}
            defaultSortOrder={sortOrder}
            defaultDistinct={distinct}
          />
        </Suspense>
      </ThumbnailFeedLayout>
    </HomeAuctionFeedLayout>
  );
}

export default Page;
