'use client';

import { useFindAuctionPreviewsQuery } from '@/generated/graphql';
import { AUCTION_CLOSED, AUCTION_LIVE } from '@/lib/auction/auction.constants';
import AuctionPreview from './auction-preview';
import HomeAuctionFeedLayout from './home-auction-feed.layout';
import ThumbnailFeedLayout from '../posts/thumbnail-feed.layout';
import AuctionMoreLink from './auction-more-link';

export default function HomeAuction() {
  const { loading, data } = useFindAuctionPreviewsQuery({
    variables: {
      orderBy: {
        createdAt: 'desc',
      },
      take: 12,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  if (loading) return <div />;
  if (!data?.findAuctionPreviews) return <div />;

  let auctions = data.findAuctionPreviews.edges.map((edge) => edge.node);
  const liveAuctions = auctions.filter(
    (auction) => auction.status === AUCTION_LIVE,
  );
  const closedAuctions = auctions.filter(
    (auction) => auction.status === AUCTION_CLOSED,
  );
  auctions = [...liveAuctions, ...closedAuctions].slice(0, 4);

  return (
    <HomeAuctionFeedLayout showSelector={false}>
      <ThumbnailFeedLayout>
        {auctions.map((auction) => (
          <AuctionPreview
            type="thumbnail"
            key={auction.id}
            auction={auction}
            isInGroup={false}
          />
        ))}
      </ThumbnailFeedLayout>
      <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium mx-0 md:mx-1 pt-2">
        <AuctionMoreLink />
      </div>
    </HomeAuctionFeedLayout>
  );
}
