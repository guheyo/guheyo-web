'use client';

import ShareButton from '../share/share-button';

export default function AuctionDetailAddons({
  bidCount,
  commentCount,
}: {
  bidCount: number;
  commentCount: number;
}) {
  return (
    <div className="flex gap-4 items-center text-base md:text-lg text-gray-300 font-bold">
      <div>{`입찰 ${bidCount}건`}</div>
      <div>{`댓글 ${commentCount}개`}</div>
      <ShareButton displayLabel />
    </div>
  );
}
