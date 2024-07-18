'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import AuctionHomeFeedLayout from '@/components/auction/auction-home-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { Suspense } from 'react';

export interface AuctionsPageProps {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: AuctionsPageProps) {
  const where = {};
  const sortOrder = undefined;
  const distinct = false;

  return (
    <Suspense>
      <AuctionHomeFeedLayout showCategories showSelectors>
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
  );
}

export default Page;
