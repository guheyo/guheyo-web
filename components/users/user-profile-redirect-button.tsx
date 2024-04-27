'use client';

import { useDeviceDetect } from '@/hooks/use-device-detect';
import { AuthorResponse } from '@/generated/graphql';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import Link from 'next/link';
import UserAvatar from './user-avatar';
import Username from './user-name';

export default function UserProfileRedirectButton({
  user,
  displayAvatar,
  displayUsername,
  mode,
}: {
  user: AuthorResponse;
  displayAvatar: boolean;
  displayUsername: boolean;
  mode: 'light' | 'standard';
}) {
  const device = useDeviceDetect();

  return (
    <Link href={parseUserHomeLink({ username: user.username })}>
      {device === 'mobile' && (
        <div
          className={`flex gap-2 items-center font-medium ${
            mode === 'standard' ? 'text-base' : 'text-sm'
          }`}
        >
          {displayAvatar && (
            <UserAvatar
              username={user.username}
              avatarURL={user.avatarURL || undefined}
              size={mode === 'standard' ? 'sm' : 'xs'}
            />
          )}
          {displayUsername && <Username user={user} />}
        </div>
      )}
      {device === 'browser' && (
        <div
          className={`flex gap-3 items-center font-medium ${
            mode === 'standard' ? 'text-lg' : 'text-base'
          }`}
        >
          {displayAvatar && (
            <UserAvatar
              username={user.username}
              avatarURL={user.avatarURL || undefined}
              size="sm"
            />
          )}
          {displayUsername && <Username user={user} />}
        </div>
      )}
    </Link>
  );
}
