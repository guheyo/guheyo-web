'use client';

import { AuthorResponse, useFindMyUserQuery } from '@/generated/graphql';
import { parseUserAbout } from '@/lib/user/parse-user-about';
import UserAvatar from './user-avatar';
import Roles from './roles';
import Username from './user-name';
import SettingButton from '../setting/setting-button';

export default function PrivateUserProfile({ userId }: { userId: string }) {
  const { data, loading } = useFindMyUserQuery({
    variables: {
      id: userId,
    },
  });

  if (loading) return <div />;
  if (!data?.findMyUser) return <div />;
  const user = data.findMyUser;

  return (
    <div className="grid grid-cols-12 gap-0 text-sm md:text-base items-center">
      <div className="col-span-3 md:col-span-3">
        <UserAvatar
          username={user.username}
          avatarURL={user.avatarURL || undefined}
          size="lg"
        />
      </div>
      <div className="col-span-9 md:col-span-9">
        <div className="grid grid-cols-12 gap-2">
          <span className="col-span-9 md:col-span-9 text-light-200 text-lg font-bold justify-self-start">
            <Username user={user as AuthorResponse} />
          </span>
          <div className="col-span-3 md:col-span-3 justify-self-end">
            <SettingButton settingItem="profile/about" />
          </div>
        </div>
      </div>
      <div className="col-span-3" />
      <div className="col-span-9 pb-2">
        {parseUserAbout({
          username: user.username,
          about: user.about,
        })}
      </div>
      <div className="col-span-3" />
      <div className="col-span-9 flex flex-col justify-self-start items-center">
        <div className="text-xs md:text-sm">
          {user.members.map((member) => (
            <Roles key={member.id} roles={member.roles} />
          ))}
        </div>
      </div>
    </div>
  );
}
