'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import { truncateText } from '@/lib/text/truncate-text';
import Thumbnail from '../base/thumbnail';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewContent({ userReview }: Props) {
  return (
    <div className="grid grid-cols-12 gap-1 items-start justify-between gap-4">
      <div className="col-span-9 flex flex-col gap-1 text-xs md:text-sm ">
        <div className="text-dark-200">
          {truncateText(userReview.post.title, 25)}
        </div>
        {userReview.content && (
          <div className="text-gray-300">
            {truncateText(userReview.content, 25)}
          </div>
        )}
      </div>
      <div className="col-span-3 flex justify-end">
        {userReview.post.thumbnail && (
          <Thumbnail
            url={userReview.post.thumbnail}
            name={userReview.post.title}
            thumbnailSize="small"
          />
        )}
      </div>
    </div>
  );
}
