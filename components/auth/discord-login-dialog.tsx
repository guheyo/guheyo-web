import React, { MouseEventHandler, useContext, useState } from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import { AuthContext } from './auth.provider';
import LoginButton from '../base/login-button';

export default function DiscordLoginDialog({
  name,
  onAuthorization,
  onUnAuthorization,
}: {
  name: string;
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
    <div>
      <button type="submit" onClick={handleOpen} className="w-full">
        {name}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        className="backdrop-blur-sm"
      >
        <DialogTitle className="text-md md:text-xl text-center">
          디스코드 아이디로 로그인 해주세요
        </DialogTitle>
        <DialogActions className="flex flex-row gap-1 text-lg items-center justify-center pt-0">
          <LoginButton />
        </DialogActions>
      </Dialog>
    </div>
  );
}
