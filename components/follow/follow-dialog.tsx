'use client';

import { MouseEventHandler } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { followBrand, unfollowBrand } from '@/lib/api/brand';
import { followUser, unfollowUser } from '@/lib/api/user';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';

export default function FollowDialog({
  target,
  targetId,
  followed,
}: {
  target: 'user' | 'brand';
  targetId: string;
  followed: boolean;
}) {
  const handleOnAuthorization: MouseEventHandler = async (e) => {
    e.preventDefault();
    if (target === 'brand') {
      if (followed) {
        await unfollowBrand({
          brandId: targetId,
        });
      } else {
        await followBrand({
          brandId: targetId,
        });
      }
    } else if (target === 'user') {
      if (followed) {
        await unfollowUser({
          followingId: targetId,
        });
      } else {
        await followUser({
          followingId: targetId,
        });
      }
    }
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  if (followed)
    return (
      <div className="flex flex-row gap-1 items-center justify-center bg-gray-500 hover:bg-gray-600 text-sm font-bold p-2 rounded-lg text-gray-100">
        <CheckIcon fontSize="small" />
        <DiscordLoginDialogButton
          name="팔로잉"
          onAuthorization={handleOnAuthorization}
          onUnAuthorization={handleOnUnAuthorization}
        />
      </div>
    );

  return (
    <div className="bg-blurple-500 hover:bg-blurple-600 text-sm font-bold p-2 rounded-lg text-gray-100">
      <DiscordLoginDialogButton
        name="팔로우"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
