'use client';

import { useFindAuctionPreviewsQuery } from '@/generated/graphql';
import { AUCTION_CLOSED, AUCTION_LIVE } from '@/lib/auction/auction.constants';
import AuctionPreview from './auction-preview';
import AuctionHomeFeedLayout from './auction-home-feed.layout';

export default function AuctionHome() {
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
    <AuctionHomeFeedLayout
      showCategories={false}
      showSelectors={false}
      showMoreLink
    >
      {auctions.map((auction) => (
        <AuctionPreview
          type="thumbnail"
          key={auction.id}
          auction={auction}
          isInGroup={false}
        />
      ))}
    </AuctionHomeFeedLayout>
  );
}
