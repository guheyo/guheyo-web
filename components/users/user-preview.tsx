'use client';

import { parseUserAbout } from '@/lib/user/parse-user-about';
import UserAvatar from './user-avatar';

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
      <div className="col-span-2 md:col-span-2 justify-self-center">
        <UserAvatar
          username={username}
          avatarURL={avatarURL || undefined}
          size="sm"
        />
      </div>
      <div className="col-span-10 md:col-span-10">
        <div className="flex flex-col">
          <div className="text-light-200 text-sm md:text-base font-bold justify-self-start">
            {username}
          </div>
          <div className="col-span-9 md:col-span-10">
            {parseUserAbout({
              username,
              about,
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
