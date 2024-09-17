'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import AuctionHomeFeedLayout from '@/components/auction/auction-home-feed.layout';
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
      <AuctionHomeFeedLayout
        showChannels
        showCategories
        showSelectors
        showMoreLink={false}
      >
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
