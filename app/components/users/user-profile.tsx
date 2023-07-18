'use client';

import React from 'react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
} from '@material-tailwind/react';
import { User } from 'prisma';
import _ from 'lodash';
import { useDeviceDetect } from '@/app/hooks/use-device-detect';
import UserAvatar from './user-avatar';
import Roles from './roles';
import SocialJoinDates from './social-join-dates';
import DmDialog from '../base/dm-dialog';
import Username from './user-name';

export default function UserProfile({
  user,
  displayAvatar,
  displayUsername,
  displayDM,
}: {
  user: User;
  displayAvatar: boolean;
  displayUsername: boolean;
  displayDM: boolean;
}) {
  const [openPopover, setOpenPopover] = React.useState(false);
  const device = useDeviceDetect();
  const getDiscordSocialID = () => {
    const account = _.find(
      user.socialAccounts,
      (socialAccount) => socialAccount.provider === 'discord',
    );
    return account?.socialId;
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler>
        <button type="button">
          {device === 'mobile' && (
            <div className="flex gap-2 items-center font-medium text-xs">
              {displayAvatar && <UserAvatar user={user} size="xs" />}
              {displayUsername && <Username user={user} />}
            </div>
          )}
          {device === 'browser' && (
            <div className="flex gap-2 items-center font-medium text-base">
              {displayAvatar && <UserAvatar user={user} size="sm" />}
              {displayUsername && <Username user={user} />}
            </div>
          )}
        </button>
      </PopoverHandler>
      <PopoverContent className="max-w-xs z-50">
        <div className="mb-2 flex items-center justify-between gap-4">
          <UserAvatar user={user} size="md" />
          {displayDM && (
            <DmDialog
              url={`https://discord.com/users/${getDiscordSocialID()}`}
            />
          )}
        </div>
        <Typography
          color="blue-gray"
          className="mb-2 flex items-center text-base"
        >
          <span className="font-semibold">{user.username}</span>
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          <div>
            <div className="font-semibold">가입시기</div>
            <SocialJoinDates socialAccounts={user.socialAccounts} />
          </div>
          <div className="mt-1">
            <div className="font-semibold">역할</div>
            <Roles roles={user.roles} />
          </div>
        </Typography>
      </PopoverContent>
    </Popover>
  );
}
