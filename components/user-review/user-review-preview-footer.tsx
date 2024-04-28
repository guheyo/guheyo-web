'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import PostAddons from '../posts/post-addons';
import UserReviewTags from './user-review-tags';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewFooter({ userReview }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-2 items-center">
        <UserReviewTags
          tags={userReview.post.tags}
          rating={userReview.rating}
        />
      </div>
      <div className="absolute bottom-4 right-4 md:right-5">
        <PostAddons
          createdAt={userReview.createdAt}
          reportCount={userReview.post.reportCount}
          reportCommentCount={userReview.post.reportCommentCount}
        />
      </div>
    </div>
  );
}
