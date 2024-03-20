'use client';

import { CRUD } from '@/lib/crud/crud.types';
import { parseCommentDate } from '@/lib/comment/parse-comment-date';
import CommentMenu from './comment-menu';

export default function CommentOutput({
  content,
  createdAt,
  updatedAt,
  displayMenu,
  handleMenuClick,
}: {
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  displayMenu: boolean;
  handleMenuClick: (mode: CRUD) => void;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex justify-between w-full">
        <div className="text-light-200 font-light text-xs md:text-sm">
          {content}
        </div>
        <div className="mr-[-12px]">
          {displayMenu && (
            <CommentMenu
              allowDelete={false}
              handleMenuClick={handleMenuClick}
            />
          )}
        </div>
      </div>
      <div className="text-dark-200 text-xs md:text-sm">
        {parseCommentDate({ createdAt, updatedAt })}
      </div>
    </div>
  );
}
