'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import PostPreviewAddons from '../posts/post-preview-addons';
import UserReviewTags from './user-review-tags';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewFooter({ userReview }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-1 md:gap-2 items-center">
        <UserReviewTags
          tags={userReview.post.tags}
          rating={userReview.rating}
        />
      </div>
      <PostPreviewAddons postCommentCount={userReview.post.commentCount} />
    </div>
  );
}
