'use client';

import { CRUD } from '@/lib/crud/crud.types';
import { parseCommentDate } from '@/lib/comment/parse-comment-date';
import { AuthorResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import CommentMenu from './comment-menu';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function CommentOutput({
  user,
  content,
  createdAt,
  updatedAt,
  displayMenu,
  handleMenuClick,
}: {
  user: AuthorResponse;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  displayMenu: boolean;
  handleMenuClick: (mode: CRUD) => void;
}) {
  const device = useDeviceDetect();

  return (
    <div className="flex flex-row gap-4 items-center">
      <UserProfileRedirectButton
        user={user}
        displayAvatar
        displayUsername={false}
        fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
      />
      <div className="flex flex-col gap-0 w-full">
        <div className="flex justify-between items-center text-xs md:text-sm">
          <div className="flex flex-row gap-2">
            <div className="text-light-200">{user.username}</div>
            <div>{parseCommentDate({ createdAt, updatedAt })}</div>
          </div>
          <div className="mr-[-18px]">
            {displayMenu && (
              <CommentMenu
                allowDelete={false}
                handleMenuClick={handleMenuClick}
              />
            )}
          </div>
        </div>
        <div className="flex text-sm md:text-base text-gray-400">{content}</div>
      </div>
    </div>
  );
}
