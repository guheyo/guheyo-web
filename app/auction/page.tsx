'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { useSearchParams } from 'next/navigation';

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
    <ThumbnailFeedLayout>
      <AuctionFeed where={where} orderBy={orderBy} distinct={distinct} />
    </ThumbnailFeedLayout>
  );
}

export default Page;
