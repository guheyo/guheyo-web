'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewHeader({ userReview }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="grid grid-cols-12 gap-2 items-center text-xs md:text-sm">
        <div className="col-span-12 flex flex-row gap-1 items-center">
          <UserProfileRedirectButton
            user={userReview.post.user}
            displayAvatar
            displayUsername
            mode="light"
          />
          <div className="text-dark-200 pr-2 md:pr-3">님이</div>
          <UserProfileRedirectButton
            user={userReview.reviewedUser}
            displayAvatar
            displayUsername
            mode="light"
          />
          <div className="text-dark-200">님께</div>
        </div>
        <div className="col-span-12 text-dark-200 pt-2 font-semibold">
          {userReview.post.title} 거래 후기를 남겼어요
        </div>
      </div>
      {/* Menu */}
    </div>
  );
}
