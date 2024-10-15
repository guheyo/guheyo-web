'use client';

import { AuthorResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import PostCreatedAt from '../posts/post-created-at';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import SocialLogo from '../socials/social-logo';

export default function SocialAccountConflictPreview({
  newUser,
  existingUser,
  status,
  createdAt,
  provider,
}: {
  newUser: AuthorResponse;
  existingUser: AuthorResponse;
  status: string;
  createdAt: Date;
  provider: string;
}) {
  const device = useDeviceDetect();

  return (
    <div className="grid grid-cols-12 justify-between items-center p-4 bg-dark-400 rounded-lg text-gray-300">
      <div className="col-span-5">
        <UserProfileRedirectButton
          user={newUser}
          displayAvatar
          displayUsername
          fontSize={device === 'mobile' ? 'text-xs' : 'text-sm'}
        />
      </div>
      <div className="col-span-5">
        <UserProfileRedirectButton
          user={existingUser}
          displayAvatar
          displayUsername
          fontSize={device === 'mobile' ? 'text-xs' : 'text-sm'}
        />
      </div>
      <div className="col-span-1">
        <SocialLogo provider={provider} width={18} height={18} />
      </div>
      <div className="col-span-1">{PostCreatedAt({ createdAt })}</div>
    </div>
  );
}
