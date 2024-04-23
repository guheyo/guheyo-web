'use client';

import { useFindAuthorQuery } from '@/generated/graphql';
import { parseDiscordDmLink } from '@/lib/discord/parse-discord-dm-link';
import { getSocialID } from '@/lib/user/get-discord-id';
import { parseUserAbout } from '@/lib/user/parse-user-about';
import UserAvatar from './user-avatar';
import DmDialog from '../dm/dm-dialog';
import Roles from './roles';
import Username from './user-name';
import OtherUserReviewDialog from '../user-review/other-user-review-dialog';

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
    <div className="grid grid-cols-12 gap-0 text-sm md:text-base items-center">
      <div className="col-span-3 md:col-span-3">
        <UserAvatar
          username={user.username}
          avatarURL={user.avatarURL || undefined}
          size="lg"
        />
      </div>
      <div className="col-span-9 md:col-span-6">
        <div className="grid grid-cols-12 gap-0">
          <span className="col-span-9 md:col-span-9 text-light-200 text-lg font-bold justify-self-start">
            <Username user={user} />
          </span>
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
      </div>
      <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col gap-2 pt-4 md:pt-0 justify-self-auto md:justify-self-end">
        <div className="grow w-44">
          <OtherUserReviewDialog username={username} />
        </div>
        <div className="grow w-44">
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
    </div>
  );
}
