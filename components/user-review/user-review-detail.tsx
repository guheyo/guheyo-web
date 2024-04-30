'use client';

import { UserReviewResponse } from '@/generated/graphql';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import UserReviewDetailMain from './user-review-detail-main';
import PostDetailMainLayout from '../posts/post-detail-main.layout';

export default function UserReviewDetail({
  userReview,
}: {
  userReview: UserReviewResponse;
}) {
  if (userReview.post.images.length > 0)
    return (
      <PostDetail>
        <ImageSlider
          images={userReview.post.images}
          sizes="h-[360px] md:h-[500px]"
        />
        <PostDetailMainLayout>
          <UserReviewDetailMain userReview={userReview} />
        </PostDetailMainLayout>
      </PostDetail>
    );

  return (
    <PostDetail>
      <PostDetailMainLayout>
        <UserReviewDetailMain userReview={userReview} />
      </PostDetailMainLayout>
    </PostDetail>
  );
}
