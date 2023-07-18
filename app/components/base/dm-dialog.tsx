import { useState } from 'react';
import { Dialog, DialogHeader } from '@material-tailwind/react';
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
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogHeader className="flex flex-col justify-center gap-2">
          <div className="text-lg md:text-2xl">
            WTB.KR에 오신 걸 환영합니다!
          </div>
          <div className="flex flex-row gap-1 text-lg items-center">
            <LoginButton />
            <CursorArrowRaysIcon width={32} height={32} />
          </div>
        </DialogHeader>
      </Dialog>
    </div>
  );
}
