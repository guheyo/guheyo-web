'use client';

import { AuctionResponse } from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import AuctionDetailMain from './auction-detail-main';

export default function AuctionDetail({
  auction,
}: {
  auction: AuctionResponse;
}) {
  return (
    <PostDetail
      images={auction.post.images}
      postDetailMain={<AuctionDetailMain auction={auction} />}
    />
  );
}
