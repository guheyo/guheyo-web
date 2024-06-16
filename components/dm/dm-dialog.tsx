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
    <div className="bg-discord-blue-500 hover:bg-discord-blue-700 text-sm font-bold p-2 rounded text-gray-300">
      <DiscordLoginDialogButton
        name="DM"
        onAuthorization={handleOnAuthorization}
        onUnAuthorization={handleOnUnAuthorization}
      />
    </div>
  );
}
