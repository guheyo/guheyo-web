'use client';

import { MouseEventHandler } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { findBrandPreview, followBrand, unfollowBrand } from '@/lib/api/brand';
import { findAuthor, findUser, followUser, unfollowUser } from '@/lib/api/user';
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
  const updateCache = async () => {
    if (target === 'brand') {
      await findBrandPreview(targetId);
    } else if (target === 'user') {
      await findUser({ id: targetId });
      await findAuthor({ id: targetId });
    }
  };

  const handleFollowAction = async (follow: boolean) => {
    if (target === 'brand') {
      if (follow) await followBrand({ brandId: targetId });
      else await unfollowBrand({ brandId: targetId });
    } else if (target === 'user') {
      if (follow) await followUser({ followingId: targetId });
      else await unfollowUser({ followingId: targetId });
    }
    await updateCache();
  };

  const handleOnAuthorization: MouseEventHandler = async (e) => {
    e.preventDefault();
    await handleFollowAction(!followed);
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  if (followed)
    return (
      <div className="flex flex-row gap-1 items-center justify-center bg-gray-500 hover:bg-gray-600 text-xs md:text-sm font-bold p-2 rounded-lg text-gray-100">
        <DiscordLoginDialogButton
          name="팔로잉"
          onAuthorization={handleOnAuthorization}
          onUnAuthorization={handleOnUnAuthorization}
        />
        <CheckIcon fontSize="inherit" />
      </div>
    );

  return (
    <div className="bg-blurple-500 hover:bg-blurple-600 text-xs md:text-sm font-bold p-2 rounded-lg text-gray-100">
      <DiscordLoginDialogButton
        name="팔로우"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
