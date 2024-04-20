'use client';

import { parseUserAbout } from '@/lib/user/parse-user-about';
import UserAvatar from './user-avatar';
import UserHomeButton from './user-home-button';

export default function UserPreview({
  username,
  avatarURL,
  about,
}: {
  username: string;
  avatarURL?: string | null;
  about?: string | null;
}) {
  return (
    <div className="grid grid-cols-12 gap-0 text-xs md:text-sm items-center bg-dark-400 rounded-lg py-4 break-all">
      <div className="col-span-2 md:col-span-1 justify-self-center">
        <UserAvatar
          username={username}
          avatarURL={avatarURL || undefined}
          size="sm"
        />
      </div>
      <div className="col-span-10 md:col-span-11">
        <div className="grid grid-cols-12">
          <span className="col-span-9 md:col-span-10 text-light-200 text-sm md:text-base font-bold justify-self-start">
            {username}
          </span>
          <div className="col-span-3 md:col-span-2 justify-self-end px-4">
            <UserHomeButton username={username} />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-9 md:col-span-10">
            {parseUserAbout({
              username,
              about,
            })}
          </div>
          <div className="col-span-3 md:col-span-2" />
        </div>
      </div>
    </div>
  );
}
