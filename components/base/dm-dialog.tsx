import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useSession } from 'next-auth/react';
import LoginButton from './login-button';

export default function DmDialog({ url }: { url: string }) {
  const [open, setOpen] = useState(false);
  const session = useSession();

  const handleOpen = () => {
    if (session.data?.user) {
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
        className="bg-eye-500 hover:bg-eye-400 text-sm font-bold p-2 rounded text-white"
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
