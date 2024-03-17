'use client';

import dayjs from 'dayjs';
import { CRUD } from '@/lib/crud/crud.types';
import CommentMenu from './comment-menu';

export default function CommentOutput({
  content,
  createdAt,
  displayMenu,
  handleMenuClick,
}: {
  content?: string;
  createdAt?: Date;
  displayMenu: boolean;
  handleMenuClick: (mode: CRUD) => void;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex justify-between w-full">
        <div className="text-light-200 font-light text-xs md:text-sm">
          {content}
        </div>
        {displayMenu && <CommentMenu handleMenuClick={handleMenuClick} />}
      </div>
      {dayjs(createdAt).fromNow()}
    </div>
  );
}
