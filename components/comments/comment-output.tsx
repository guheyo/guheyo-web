'use client';

import { CRUD } from '@/lib/crud/crud.types';
import { parseCommentDate } from '@/lib/comment/parse-comment-date';
import { AuthorResponse, ReactionResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useEffect, useState } from 'react';
import CommentMenu from './comment-menu';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import ReactionBar from '../reaction/reaction-bar';

export default function CommentOutput({
  user,
  isCurrentUser,
  postId,
  content,
  createdAt,
  updatedAt,
  displayMenu,
  commentId,
  commentReactions,
  handleMenuClick,
}: {
  user: AuthorResponse;
  isCurrentUser: boolean;
  postId?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  displayMenu: boolean;
  commentId: string;
  commentReactions: ReactionResponse[];
  handleMenuClick: (mode: CRUD) => void;
}) {
  const device = useDeviceDetect();
  const [isHovered, setIsHovered] = useState(false);
  const [reactions, setReactions] = useState<ReactionResponse[]>([]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setReactions(commentReactions);
  }, [commentReactions]);

  return (
    <div
      className="flex flex-row gap-4 items-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <UserProfileRedirectButton
        user={user}
        displayAvatar
        displayUsername={false}
        fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center text-xs md:text-sm h-4">
          <div className="flex flex-row gap-2">
            <div className="text-gray-300 font-semibold">{user.username}</div>
            <div>{parseCommentDate({ createdAt, updatedAt })}</div>
          </div>
          {displayMenu && isHovered && (
            <CommentMenu
              isCurrentUser={isCurrentUser}
              handleMenuClick={handleMenuClick}
            />
          )}
        </div>
        <div className="flex text-xs md:text-sm text-dark-100 font-thin">
          {content}
        </div>
        {postId && (
          <div className="pt-1 ml-[-10px]">
            <ReactionBar
              postId={postId}
              commentId={commentId}
              reactions={reactions}
            />
          </div>
        )}
      </div>
    </div>
  );
}
