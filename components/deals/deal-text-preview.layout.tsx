'use client';

import dayjs from 'dayjs';
import { getPrice } from '@/lib/formatter';
import PostDialog from '../posts/post-dialog';

interface Props {
  name: string;
  price: number;
  createdAt: Date;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function DealTextPreviewLayout({
  name,
  price,
  createdAt,
  open,
  handleOpen,
  handleClose,
  children,
}: Props) {
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
            {name}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex-none text-xs md:text-sm font-semibold">
              {getPrice(price)}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-500">
              {dayjs(createdAt).fromNow()}
            </div>
          </div>
        </div>
      </button>
      <div>
        <PostDialog open={open} handleClose={handleClose}>
          {children}
        </PostDialog>
      </div>
    </div>
  );
}
