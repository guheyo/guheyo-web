'use client';

import { MouseEventHandler } from 'react';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';

export default function FollowDialog({
  target,
  targetId,
}: {
  target: string;
  targetId: string;
}) {
  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
    // TODO
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-blurple-500 hover:bg-blurple-600 text-sm font-bold p-2 rounded text-gray-100">
      <DiscordLoginDialogButton
        name="팔로우"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
