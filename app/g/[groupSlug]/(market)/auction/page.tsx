'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { useSearchParams } from 'next/navigation';

export interface AuctionsPageProps {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: AuctionsPageProps) {
  const searchParams = useSearchParams();
  const status = parseAuctionStatus({
    status: searchParams.get('status'),
  });
  const where = {
    status,
  };
  const distinct = searchParams.get('distinct') !== 'false';

  return (
    <ThumbnailFeedLayout>
      <AuctionFeed where={where} distinct={distinct} />
    </ThumbnailFeedLayout>
  );
}

export default Page;
