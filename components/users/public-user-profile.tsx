'use client';

import { useFindAuthorQuery } from '@/generated/graphql';
import { parseDiscordDmLink } from '@/lib/discord/parse-discord-dm-link';
import { getSocialID } from '@/lib/user/get-discord-id';
import UserAvatar from './user-avatar';
import DmDialog from '../dm/dm-dialog';

export default function PublicUserProfile({ username }: { username: string }) {
  const { data, loading } = useFindAuthorQuery({
    variables: {
      username,
    },
  });

  if (loading) return <div />;
  if (!data?.findAuthor) return <div />;
  const user = data.findAuthor;

  return (
    <div className="grid grid-cols-12 px-2 pb-6 text-sm md:text-base rounded-lg items-center">
      <div className="col-span-3 md:col-span-1">
        <UserAvatar
          username={user.username}
          avatarURL={user.avatarURL || undefined}
          size="lg"
        />
      </div>
      <div className="col-span-6 md:col-span-2">
        <span className="text-dark-200 text-lg font-bold">{user.username}</span>
      </div>
      <div className="col-span-3 md:col-span-1">
        <DmDialog
          url={parseDiscordDmLink(
            getSocialID({
              socialAccounts: user.socialAccounts,
              provider: 'discord',
            }),
          )}
        />
      </div>
    </div>
  );
}
