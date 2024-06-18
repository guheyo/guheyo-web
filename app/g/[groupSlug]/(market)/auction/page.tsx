'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';

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
    <ThumbnailFeedLayout>
      <AuctionFeed
        defaultWhere={where}
        defaultSortOrder={sortOrder}
        defaultDistinct={distinct}
      />
    </ThumbnailFeedLayout>
  );
}

export default Page;
