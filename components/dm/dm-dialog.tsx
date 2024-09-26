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
    <div className="bg-blurple-500 hover:bg-blurple-600 text-xs md:text-sm font-bold p-2 rounded-lg text-gray-100">
      <DiscordLoginDialogButton
        name="DM"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
