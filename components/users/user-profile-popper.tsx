'use client';

import { Typography } from '@mui/material';
import _ from 'lodash';
import { useState } from 'react';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { AuthorResponse } from '@/generated/graphql';
import UserAvatar from './user-avatar';
import Roles from './roles';
import SocialJoinDates from '../socials/social-join-dates';
import DmDialog from '../base/dm-dialog';
import Popper from '../base/popper';
import Username from './user-name';

export default function UserProfilePopper({
  user,
  displayAvatar,
  displayUsername,
  displayDM,
  mode,
}: {
  user: AuthorResponse;
  displayAvatar: boolean;
  displayUsername: boolean;
  displayDM: boolean;
  mode: 'light' | 'standard';
}) {
  const device = useDeviceDetect();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const getDiscordSocialID = () => {
    const account = _.find(
      user.socialAccounts,
      (socialAccount) => socialAccount.provider === 'discord',
    );
    return account?.socialId;
  };

  return (
    <>
      <button type="button" onClick={handlePopoverOpen}>
        {device === 'mobile' && (
          <div className="flex gap-2 items-center font-medium text-base">
            {mode === 'light' && displayAvatar && (
              <UserAvatar
                username={user.username}
                avatarURL={user.avatarURL || undefined}
                size="xs"
              />
            )}
            {mode === 'standard' && displayAvatar && (
              <UserAvatar
                username={user.username}
                avatarURL={user.avatarURL || undefined}
                size="sm"
              />
            )}
            {mode === 'standard' && displayUsername && <Username user={user} />}
          </div>
        )}
        {device === 'browser' && (
          <div className="flex gap-3 items-center font-medium text-lg">
            {displayAvatar && (
              <UserAvatar
                username={user.username}
                avatarURL={user.avatarURL || undefined}
                size="sm"
              />
            )}
            {mode === 'standard' && displayUsername && <Username user={user} />}
          </div>
        )}
      </button>
      <Popper
        open={!!anchorEl}
        anchorEl={anchorEl}
        handler={handlePopoverClose}
      >
        <div className="max-w-xs bg-light-200 p-4 rounded-lg">
          <div className="mb-2 flex items-center justify-between gap-4">
            <UserAvatar
              username={user.username}
              avatarURL={user.avatarURL || undefined}
              size="md"
            />
            {displayDM && (
              <DmDialog
                url={`https://discord.com/users/${getDiscordSocialID()}`}
              />
            )}
          </div>
          <Typography
            variant="caption"
            color="blue-gray"
            className="mb-2 flex items-center text-base"
          >
            <span className="font-semibold">{user.username}</span>
          </Typography>
          <Typography variant="caption" color="gray" className="font-normal">
            <div>
              <div className="font-semibold">가입시기</div>
              <SocialJoinDates
                socialAccounts={user.socialAccounts}
                logoSize={18}
              />
            </div>
            <div className="mt-1">
              <div className="font-semibold">역할</div>
              {user.members.map((member) => (
                <Roles key={member.id} roles={member.roles} />
              ))}
            </div>
          </Typography>
        </div>
      </Popper>
    </>
  );
}