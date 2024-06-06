import React, {
  MouseEventHandler,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { AuthContext } from './auth.provider';
import DiscordLoginDialog from './discord-login-dialog';

export default function DiscordLoginDialogButton({
  name,
  icon,
  onAuthorization,
  onUnAuthorization,
}: {
  name?: string;
  icon?: ReactNode;
  onAuthorization: MouseEventHandler;
  onUnAuthorization: MouseEventHandler;
}) {
  const [open, setOpen] = useState(false);
  const { jwtPayload } = useContext(AuthContext);

  const handleOpen: MouseEventHandler = (e) => {
    if (jwtPayload?.username) {
      setOpen(false);
      onAuthorization(e);
    } else {
      setOpen(true);
      onUnAuthorization(e);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex">
      <button type="submit" onClick={handleOpen} className="w-full">
        <div className="flex flex-row gap-1 items-center justify-center">
          {icon}
          {name}
        </div>
      </button>
      <DiscordLoginDialog open={open} onClose={handleClose} />
    </div>
  );
}
