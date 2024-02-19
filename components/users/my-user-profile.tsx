'use client';

import { MyUserResponse } from '@/generated/graphql';
import UserAvatar from './user-avatar';
import Roles from './roles';
import Role from './role';
import DiscordAccount from '../socials/discord-account';

export default function MyUserProfile({ user }: { user: MyUserResponse }) {
  return (
    <div className="grid gap-4 bg-dark-400 p-4 text-sm md:text-base rounded-lg">
      <div className="flex flex-row items-center gap-4">
        <UserAvatar
          username={user.username}
          avatarURL={user.avatarURL || undefined}
          size="md"
        />
        <span className="font-semibold">{user.username}</span>
      </div>
      <div className="grid gap-4 p-2">
        <DiscordAccount socialAccounts={user.socialAccounts} />
        <div className="grid gap-2">
          <Role />
          <div className="p-1 text-xs md:text-sm">
            {user.members.map((member) => (
              <Roles key={member.id} roles={member.roles} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
