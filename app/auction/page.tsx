'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import AuctionHomeFeedLayout from '@/components/auction/auction-home-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { Suspense } from 'react';

function Page() {
  const where = {};
  const sortOrder = undefined;
  const distinct = false;

  return (
    <div className="mx-2 md:mx-0">
      <Suspense>
        <AuctionHomeFeedLayout showCategories={false} showSelectors>
          <ThumbnailFeedLayout>
            <AuctionFeed
              type="thumbnail"
              defaultWhere={where}
              defaultSortOrder={sortOrder}
              defaultDistinct={distinct}
            />
          </ThumbnailFeedLayout>
        </AuctionHomeFeedLayout>
      </Suspense>
    </div>
  );
}

export default Page;
