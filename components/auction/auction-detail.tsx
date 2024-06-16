'use client';

import { AuctionResponse, BidResponse } from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import AuctionDetailMain from './auction-detail-main';

export default function AuctionDetail({
  auction,
  highestBid,
  bidCount,
  commentCount,
}: {
  auction: AuctionResponse;
  highestBid?: BidResponse;
  bidCount: number;
  commentCount: number;
}) {
  return (
    <PostDetail
      images={auction.post.images}
      postDetailMain={
        <AuctionDetailMain
          auction={auction}
          highestBid={highestBid}
          bidCount={bidCount}
          commentCount={commentCount}
        />
      }
    />
  );
}
