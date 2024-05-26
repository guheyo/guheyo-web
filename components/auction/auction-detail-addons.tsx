'use client';

import {
  useFindBidCountQuery,
  useFindCommentCountQuery,
} from '@/generated/graphql';
import ShareButton from '../share/share-button';

export default function AuctionDetailAddons({
  auctionId,
  postId,
}: {
  auctionId: string;
  postId: string;
}) {
  const { data: bidCountData } = useFindBidCountQuery({
    variables: {
      auctionId,
    },
    fetchPolicy: 'cache-first',
  });

  const { data: commentCountData } = useFindCommentCountQuery({
    variables: {
      postId,
    },
    fetchPolicy: 'cache-first',
  });

  const bidCount = bidCountData?.findBidCount.count || 0;
  const commentCount = commentCountData?.findCommentCount.count || 0;

  return (
    <div className="flex gap-4 items-center text-base md:text-lg text-gray-300 font-bold">
      <div>{`입찰 ${bidCount}건`}</div>
      <div>{`댓글 ${commentCount}개`}</div>
      <ShareButton />
    </div>
  );
}
