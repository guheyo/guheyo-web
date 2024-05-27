'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { parseOfferStatus } from '@/lib/offer/parse-offer-status';
import { useSearchParams } from 'next/navigation';

export interface AuctionsPageProps {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: AuctionsPageProps) {
  const searchParams = useSearchParams();
  const status = parseOfferStatus({
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
