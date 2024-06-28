'use client';

import { MouseEventHandler } from 'react';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';

export default function DmDialog({ url }: { url: string }) {
  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-blurple-500 hover:bg-blurple-600 text-sm font-bold p-2 rounded text-gray-300">
      <DiscordLoginDialogButton
        name="DM"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
