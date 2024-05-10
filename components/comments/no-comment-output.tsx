'use client';

import { AuthorResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function NoCommentOutput({ user }: { user: AuthorResponse }) {
  const device = useDeviceDetect();

  return (
    <div className="flex flex-row gap-4 items-start">
      <UserProfileRedirectButton
        user={user}
        displayAvatar
        displayUsername={false}
        fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center text-xs md:text-sm h-4">
          <div className="flex flex-row gap-2">
            <div className="text-gray-300 font-semibold">{user.username}</div>
          </div>
        </div>
        <div className="flex text-xs md:text-sm text-red-400 font-thin">
          무응답
        </div>
      </div>
    </div>
  );
}
