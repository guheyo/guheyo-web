'use client';

import { AuthorResponse } from '@/generated/graphql';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import Link from 'next/link';
import { FontSize } from '@/lib/font/font.types';
import UserAvatar from './user-avatar';
import Username from './user-name';

export default function UserProfileRedirectButton({
  user,
  displayAvatar,
  displayUsername,
  fontSize,
}: {
  user: AuthorResponse;
  displayAvatar: boolean;
  displayUsername: boolean;
  fontSize: FontSize;
}) {
  return (
    <Link href={parseUserHomeLink({ username: user.username })}>
      <div
        className={`flex gap-2 md:gap-3 items-center font-medium ${fontSize}`}
      >
        {displayAvatar && (
          <UserAvatar
            username={user.username}
            avatarURL={user.avatarURL || undefined}
            fontSize={fontSize}
          />
        )}
        {displayUsername && <Username user={user} />}
      </div>
    </Link>
  );
}
