'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PostCreatedAt from '../posts/post-created-at';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewHeader({ userReview }: Props) {
  const device = useDeviceDetect();

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="grid grid-cols-12 gap-2 items-center text-xs md:text-sm text-dark-200 ">
        <div className="col-span-12 flex flex-row gap-2 items-center">
          <UserProfileRedirectButton
            user={userReview.post.user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
          />
          <ArrowRightAltIcon className="text-dark-200" />
          <UserProfileRedirectButton
            user={userReview.reviewedUser}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
          />
          <PostCreatedAt createdAt={userReview.createdAt} />
        </div>
      </div>
      {/* Menu */}
    </div>
  );
}
