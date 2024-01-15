'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPrice } from '@/lib/formatter';
import { DemandResponse } from '@/generated/graphql';
import DemandDetail from './demand-detail';
import PostDialog from '../posts/post-dialog';

interface Props {
  demand: DemandResponse;
}

export default function DemandPreview({ demand }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    window.history.pushState({}, ``, `/demands/${demand.id}`);
  };

  const handleClose = () => {
    setOpen(!open);
    router.back();
  };

  return (
    <div className="overflow-hidden line-break bg-dark-400 p-3 mx-2 md:mx-0 rounded-lg">
      <button
        type="submit"
        aria-label="demand-detail"
        onClick={() => handleOpen()}
        className="w-full text-start"
      >
        <div className="grid gap-2">
          <div className="justify-self-start text-sm md:text-base font-medium text-light-200">
            {demand.name}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex-none text-sm md:text-base font-semibold">
              {getPrice(demand.price)}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-500">
              {dayjs(demand.createdAt).fromNow()}
            </div>
          </div>
        </div>
      </button>
      <div>
        <PostDialog
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          <DemandDetail demand={demand} />
        </PostDialog>
      </div>
    </div>
  );
}
