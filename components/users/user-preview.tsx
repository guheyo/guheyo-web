'use client';

import { parseUserAbout } from '@/lib/user/parse-user-about';
import Link from 'next/link';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import UserAvatar from './user-avatar';
import InfoCard from '../info/info-card';
import SearchResultCardLayout from '../search/search-result-card.layout';

export default function UserPreview({
  username,
  avatarURL,
  about,
}: {
  username: string;
  avatarURL?: string | null;
  about?: string | null;
}) {
  const device = useDeviceDetect();

  return (
    <Link href={parseUserHomeLink({ username })}>
      <SearchResultCardLayout>
        <InfoCard
          name={username}
          icon={
            <UserAvatar
              username={username}
              avatarURL={avatarURL || undefined}
              fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
            />
          }
          about={parseUserAbout({
            username,
            about,
          })}
        />
      </SearchResultCardLayout>
    </Link>
  );
}
