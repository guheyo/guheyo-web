'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import HomeAuctionFeedLayout from '@/components/auction/home-auction-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Page() {
  const searchParams = useSearchParams();
  const status = parseAuctionStatus({
    status: searchParams.get('status'),
  });
  const where = {
    status,
  };

  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: searchParams.get('sort') || undefined,
  });

  const distinct = searchParams.get('distinct') !== 'false';

  return (
    <HomeAuctionFeedLayout>
      <ThumbnailFeedLayout>
        <Suspense>
          <AuctionFeed where={where} orderBy={orderBy} distinct={distinct} />
        </Suspense>
      </ThumbnailFeedLayout>
    </HomeAuctionFeedLayout>
  );
}

export default Page;
