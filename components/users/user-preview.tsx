'use client';

import { parseUserAbout } from '@/lib/user/parse-user-about';
import Link from 'next/link';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
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
  return (
    <Link href={parseUserHomeLink({ username })}>
      <SearchResultCardLayout>
        <InfoCard
          name={username}
          icon={
            <UserAvatar
              username={username}
              avatarURL={avatarURL || undefined}
              size="sm"
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
