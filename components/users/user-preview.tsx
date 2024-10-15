'use client';

import { parseUserAbout } from '@/lib/user/parse-user-about';
import Link from 'next/link';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import Avatar from '../avatar/avatar';
import InfoCard from '../info/info-card';
import FollowDialog from '../follow/follow-dialog';

export default function UserPreview({
  userId,
  username,
  avatarURL,
  about,
  followed,
  displayFollow,
}: {
  userId: string;
  username: string;
  avatarURL?: string | null;
  about?: string | null;
  followed?: boolean | null;
  displayFollow: boolean;
}) {
  const device = useDeviceDetect();

  return (
    <Link href={parseUserHomeLink({ username })}>
      <div className="flex flex-row justify-between items-center p-4 bg-dark-400 rounded-lg text-gray-300">
        <InfoCard
          name={username}
          icon={
            <Avatar
              name={username}
              src={avatarURL || undefined}
              fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
            />
          }
          about={parseUserAbout({
            username,
            about,
          })}
        />
        {displayFollow && (
          <FollowDialog target="user" targetId={userId} followed={!!followed} />
        )}
      </div>
    </Link>
  );
}
