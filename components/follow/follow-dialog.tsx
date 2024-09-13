'use client';

import { MouseEventHandler } from 'react';
import { followBrand, unfollowBrand } from '@/lib/api/brand';
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
    }
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-blurple-500 hover:bg-blurple-600 text-sm font-bold p-2 rounded text-gray-100">
      {!followed ? (
        <DiscordLoginDialogButton
          name="팔로우"
          onAuthorization={handleOnAuthorization}
          onUnAuthorization={handleOnUnAuthorization}
        />
      ) : (
        <DiscordLoginDialogButton
          name="팔로잉"
          onAuthorization={handleOnAuthorization}
          onUnAuthorization={handleOnUnAuthorization}
        />
      )}
    </div>
  );
}
