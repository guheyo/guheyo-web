'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PostCreatedAt from '../posts/post-created-at';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewHeader({ userReview }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="grid grid-cols-12 gap-2 items-center text-xs md:text-sm text-dark-200">
        <div className="col-span-12 flex flex-row gap-2 items-center">
          <UserProfileRedirectButton
            user={userReview.post.user}
            displayAvatar
            displayUsername
            fontSize="text-xs"
          />
          <ArrowRightAltIcon className="text-dark-200" />
          <UserProfileRedirectButton
            user={userReview.reviewedUser}
            displayAvatar
            displayUsername
            fontSize="text-xs"
          />
          <PostCreatedAt createdAt={userReview.createdAt} />
        </div>
      </div>
      {/* Menu */}
    </div>
  );
}
