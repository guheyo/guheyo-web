'use client';

import { useFindAuthorQuery } from '@/generated/graphql';
import { parseDiscordDmLink } from '@/lib/discord/parse-discord-dm-link';
import { getSocialID } from '@/lib/user/get-discord-id';
import { parseUserAbout } from '@/lib/user/parse-user-about';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import UserAvatar from './user-avatar';
import DmDialog from '../dm/dm-dialog';
import Roles from './roles';
import Username from './user-name';
import SelectUserReviewTargetOfferDialog from '../user-review/select-user-review-target-offer-dialog';

export default function PublicUserProfile({ username }: { username: string }) {
  const device = useDeviceDetect();
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
          fontSize={device === 'mobile' ? 'text-6xl' : 'text-9xl'}
        />
      </div>
      <div className="col-span-9 md:col-span-7">
        <div className="grid grid-cols-12 gap-0">
          <span className="col-span-9 md:col-span-9 text-gray-300 text-lg font-bold justify-self-start">
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
              <Roles key={user.id} roles={user.roles} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-2 flex flex-row md:flex-col gap-2 pt-4 md:pt-0 justify-self-auto md:justify-self-end">
        <div className="grow w-32">
          <SelectUserReviewTargetOfferDialog userId={user.id} />
        </div>
        <div className="grow w-32">
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
