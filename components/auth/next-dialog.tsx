'use client';

import DiscordLoginDialogButton from '@/components/auth/discord-login-dialog-button';
import { MouseEventHandler } from 'react';

export default function NextDialog({
  onAuthorization,
  onUnAuthorization,
}: {
  onAuthorization: MouseEventHandler;
  onUnAuthorization: MouseEventHandler;
}) {
  return (
    <div className="p-3 text-gray-300 bg-star-500 hover:bg-star-400 text-lg font-bold rounded-lg absolute md:relative m-2 md:m-0 bottom-0 left-0 right-0">
      <DiscordLoginDialogButton
        name="다음"
        onAuthorization={onAuthorization}
        onUnAuthorization={onUnAuthorization}
      />
    </div>
  );
}
