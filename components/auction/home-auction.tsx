'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { useFindAuctionPreviewsQuery } from '@/generated/graphql';
import { isMobile } from 'react-device-detect';
import AuctionPreview from './auction-preview';
import HomeAuctionFeedLayout from './home-auction-feed.layout';
import ThumbnailFeedLayout from '../posts/thumbnail-feed.layout';

export default function HomeAuction() {
  const { loading, data } = useFindAuctionPreviewsQuery({
    variables: {
      orderBy: {
        createdAt: 'desc',
      },
      take: 4,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  if (loading) return <div />;
  if (!data?.findAuctionPreviews) return <div />;
  const auctions = data.findAuctionPreviews.edges.map((edge) => edge.node);

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
        <Link href="/auction">
          <span className="flex flex-row items-center gap-1">
            <PlayCircleOutlineOutlinedIcon
              fontSize={isMobile ? 'small' : 'medium'}
            />
            경매장
          </span>
        </Link>
      </div>
    </HomeAuctionFeedLayout>
  );
}
