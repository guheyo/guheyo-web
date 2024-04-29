'use client';

import { UserReviewResponse } from '@/generated/graphql';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import UserReviewDetailMain from './user-review-detail-main';

export default function UserReviewDetail({
  userReview,
}: {
  userReview: UserReviewResponse;
}) {
  if (userReview.post.images.length > 0)
    return (
      <PostDetail>
        <div className="w-full md:w-[45%]">
          <ImageSlider
            images={userReview.post.images}
            sizes="h-[360px] md:h-[524px]"
          />
        </div>

        <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
          <UserReviewDetailMain userReview={userReview} />
        </div>
      </PostDetail>
    );

  return (
    <PostDetail>
      <div className="flex-none line-break w-full md:w-[90%] px-4 md:px-0 py-4 md:py-0">
        <UserReviewDetailMain userReview={userReview} />
      </div>
    </PostDetail>
  );
}
