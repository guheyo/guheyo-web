'use client';

import ShareButton from '../share/share-button';

export default function PostDetailAddons({
  commentCount,
}: {
  commentCount?: number;
}) {
  return (
    <div className="flex gap-2 items-center text-base md:text-lg text-gray-300 font-bold">
      {commentCount !== undefined && `댓글 ${commentCount}개`}
      <ShareButton displayLabel />
    </div>
  );
}
