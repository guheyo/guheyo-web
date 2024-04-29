'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import { truncateText } from '@/lib/text/truncate-text';
import Thumbnail from '../base/thumbnail';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewContent({ userReview }: Props) {
  return (
    <div className="flex flex-row gap-1 items-start justify-between gap-4">
      {userReview.content && (
        <div className="text-xs md:text-sm text-light-200">
          {truncateText(userReview.content, 24)}
        </div>
      )}
      {userReview.post.thumbnail && (
        <Thumbnail
          url={userReview.post.thumbnail}
          name={userReview.post.title}
          thumbnailSize="small"
        />
      )}
    </div>
  );
}
