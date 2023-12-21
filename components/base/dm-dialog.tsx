import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useSession } from 'next-auth/react';
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';
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
        className="bg-black hover:bg-gray-700 text-sm font-bold p-2 rounded text-white"
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
          guheyo에 오신 걸 환영합니다!
        </DialogTitle>
        <DialogActions className="flex flex-row gap-1 text-lg items-center justify-center pt-0">
          <LoginButton />
          <CursorArrowRaysIcon width={32} height={32} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
