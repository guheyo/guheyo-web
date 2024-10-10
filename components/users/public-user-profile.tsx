'use client';

import { useFindAuthorQuery } from '@/generated/graphql';
import { parseDiscordDmLink } from '@/lib/discord/parse-discord-dm-link';
import { getSocialID } from '@/lib/user/get-discord-id';
import { parseUserAbout } from '@/lib/user/parse-user-about';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import Link from 'next/link';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import { ProfileType } from '@/lib/user/user.interfaces';
import Avatar from '../avatar/avatar';
import DmDialog from '../dm/dm-dialog';
import Roles from './roles';
import SelectUserReviewTargetPostDialog from '../user-review/select-user-review-target-post-dialog';
import SocialLogos from '../socials/social-logos';
import UsernameLink from './user-name-link';
import FollowCount from '../follow/follow-count';
import FollowDialog from '../follow/follow-dialog';

export default function PublicUserProfile({
  username,
  displayReviewButton,
  type,
}: {
  username: string;
  displayReviewButton: boolean;
  type: ProfileType;
}) {
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
      <div className="col-span-3 w-fit">
        <Link href={parseUserHomeLink({ username })}>
          <Avatar
            name={user.username}
            src={user.avatarURL || undefined}
            fontSize={device === 'mobile' ? 'text-6xl' : 'text-9xl'}
          />
        </Link>
      </div>
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-1">
          <span className="col-span-12 text-gray-300 text-lg font-bold justify-self-start">
            <UsernameLink user={user} />
          </span>
          <div className="col-span-12 flex flex-row gap-3 text-base">
            <FollowCount
              followType="follower"
              followCount={user.followers?.length || 0}
            />
            <FollowCount
              followType="following"
              followCount={user.following?.length || 0}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 pt-4">
          {displayReviewButton && (
            <div className="w-24">
              <SelectUserReviewTargetPostDialog userId={user.id} />
            </div>
          )}
          <div className="w-24">
            <FollowDialog
              target="user"
              targetId={user.id}
              followed={user.followed!}
            />
          </div>
          <div className="w-24">
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
      {type === 'detail' && (
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
      )}
    </div>
  );
}
