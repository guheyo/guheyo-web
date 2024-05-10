'use client';

import { UserReviewResponse } from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import UserReviewDetailMain from './user-review-detail-main';

export default function UserReviewDetail({
  userReview,
}: {
  userReview: UserReviewResponse;
}) {
  return (
    <PostDetail
      images={userReview.post.images}
      postDetailMain={<UserReviewDetailMain userReview={userReview} />}
    />
  );
}
