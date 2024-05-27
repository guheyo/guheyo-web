'use client';

import { AuctionResponse } from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import AuctionDetailMain from './auction-detail-main';

export default function AuctionDetail({
  auction,
  currentBidPrice,
  bidCount,
  commentCount,
}: {
  auction: AuctionResponse;
  currentBidPrice: number;
  bidCount: number;
  commentCount: number;
}) {
  return (
    <PostDetail
      images={auction.post.images}
      postDetailMain={
        <AuctionDetailMain
          auction={auction}
          currentBidPrice={currentBidPrice}
          bidCount={bidCount}
          commentCount={commentCount}
        />
      }
    />
  );
}
