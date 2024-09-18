'use client';

import { AuthorResponse, useFindMyUserQuery } from '@/generated/graphql';
import { parseUserAbout } from '@/lib/user/parse-user-about';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import Link from 'next/link';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import Avatar from '../avatar/avatar';
import Roles from './roles';
import SettingButton from '../setting/setting-button';
import SocialLogos from '../socials/social-logos';
import UsernameLink from './user-name-link';
import FollowCount from '../follow/follow-count';

export default function PrivateUserProfile() {
  const device = useDeviceDetect();
  const { data, loading } = useFindMyUserQuery({
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findMyUser) return <div />;
  const user = data.findMyUser;

  return (
    <div className="grid grid-cols-12 gap-0 text-sm md:text-base items-center">
      <div className="col-span-3 w-fit">
        <Link href={parseUserHomeLink({ username: user.username })}>
          <Avatar
            name={user.username}
            src={user.avatarURL || undefined}
            fontSize={device === 'mobile' ? 'text-6xl' : 'text-9xl'}
          />
        </Link>
      </div>
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-1">
          <span className="col-span-9 text-gray-300 text-lg font-bold justify-self-start">
            <UsernameLink user={user as AuthorResponse} />
          </span>
          <div className="col-span-3 justify-self-end">
            <SettingButton settingItem="profile/about" />
          </div>
          <div className="col-span-12 flex flex-row gap-3 text-base">
            <FollowCount
              followType="following"
              followCount={user.following?.length || 0}
            />
            <FollowCount
              followType="follower"
              followCount={user.followers?.length || 0}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 pt-4 flex flex-col gap-3">
        {parseUserAbout({
          username: user.username,
          about: user.about,
        })}
        <div className="flex flex-col gap-2 justify-self-start text-xs md:text-sm">
          <SocialLogos socialAccounts={user.socialAccounts} logoSize={18} />
          <Roles key={user.id} roles={user.roles} />
        </div>
      </div>
    </div>
  );
}
