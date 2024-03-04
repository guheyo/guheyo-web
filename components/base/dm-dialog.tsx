import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import useJwtUser from '@/hooks/use-jwt-user';
import LoginButton from './login-button';

export default function DmDialog({ url }: { url: string }) {
  const [open, setOpen] = useState(false);
  const { data: jwtUser } = useJwtUser();

  const handleOpen = () => {
    if (jwtUser?.username) {
      window.open(url, '_blank');
    } else {
      setOpen(!open);
    }
  };

  return (
    <div>
      <button
        type="submit"
        onClick={handleOpen}
        className="bg-discord-blue-500 hover:bg-discord-blue-700 text-sm font-bold p-2 rounded text-white"
      >
        DM
      </button>
      <Dialog
        open={open}
        onClose={handleOpen}
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
