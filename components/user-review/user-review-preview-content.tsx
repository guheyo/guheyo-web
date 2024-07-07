'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import Thumbnail from '../base/thumbnail';
import PostPreviewTitle from '../posts/post-preview-title';
import PostPreviewContent from '../posts/post-preview-content';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewContent({ userReview }: Props) {
  return (
    <div className="grid grid-cols-12 gap-1 items-start justify-between gap-4">
      <div className="col-span-9 flex flex-col gap-1">
        <PostPreviewTitle title={userReview.post.title} />
        {userReview.content && (
          <PostPreviewContent content={userReview.content} />
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
