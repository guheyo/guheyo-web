'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import HomeAuctionFeedLayout from '@/components/auction/home-auction-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';

function Page() {
  const status = parseAuctionStatus({
    status: null,
  });
  const where = {
    status,
  };

  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: undefined,
  });

  const distinct = false;

  return (
    <HomeAuctionFeedLayout>
      <ThumbnailFeedLayout>
        <AuctionFeed where={where} orderBy={orderBy} distinct={distinct} />
      </ThumbnailFeedLayout>
    </HomeAuctionFeedLayout>
  );
}

export default Page;
