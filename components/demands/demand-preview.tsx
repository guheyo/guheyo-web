'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPrice } from '@/lib/formatter';
import { DemandPreviewFragment } from '@/generated/graphql';
import DemandDetail from './demand-detail';
import PostDialog from '../posts/post-dialog';

interface Props {
  demand: DemandPreviewFragment;
}

export default function DemandPreview({ demand }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    window.history.pushState(
      {},
      ``,
      `/user/${demand.buyer.username}/demands/${demand.slug}`,
    );
  };

  const handleClose = () => {
    setOpen(!open);
    router.back();
  };

  return (
    <div className="overflow-hidden line-break bg-dark-400 p-3 rounded-lg">
      <button
        type="submit"
        aria-label="demand-detail"
        onClick={() => handleOpen()}
        className="w-full text-start"
      >
        <div className="grid gap-2">
          <div className="justify-self-start text-xs md:text-sm font-medium text-light-200">
            {demand.name}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex-none text-xs md:text-sm font-semibold">
              {getPrice(demand.price)}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-500">
              {dayjs(demand.createdAt).fromNow()}
            </div>
          </div>
        </div>
      </button>
      <div>
        <PostDialog open={open} handleClose={handleClose}>
          <DemandDetail slug={demand.slug!} />
        </PostDialog>
      </div>
    </div>
  );
}
