'use client';

import dayjs from 'dayjs';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { getPrice } from '@/lib/formatter';
import { UserImageResponse } from '@/generated/graphql';
import Thumbnail from '../base/thumbnail';
import PostDialog from '../posts/post-dialog';

interface Props {
  thumbnail?: UserImageResponse | null;
  name: any;
  price: number;
  createdAt: Date;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function DealThumbnailPreviewLayout({
  thumbnail,
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
        aria-label="deal-detail"
        onClick={() => handleOpen()}
        className="flex flex-row w-full md:flex-col text-start"
      >
        {thumbnail && (
          <div className="flex relative w-[38.5%] md:w-fit">
            <Thumbnail url={thumbnail.url} name={thumbnail.name} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </div>
        )}
        <div className="w-[61.5%] md:w-full px-4 md:px-2">
          <div className="text-xs md:text-sm font-medium py-3 text-light-200 h-fit md:h-12">
            {name}
          </div>
          <div className="flex flex-row justify-between items-center py-3">
            <div className="flex-none text-sm md:text-base font-semibold">
              {getPrice(price)}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-400">
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