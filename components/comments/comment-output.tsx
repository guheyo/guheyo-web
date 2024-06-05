'use client';

import { CRUD } from '@/lib/crud/crud.types';
import { parseCommentDate } from '@/lib/comment/parse-comment-date';
import {
  AuthorResponse,
  ReactionResponse,
  UserImageResponse,
} from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CommentMenu from './comment-menu';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import ReactionBar from '../reaction/reaction-bar';
import ImageSlider from '../base/image-slider';

export default function CommentOutput({
  user,
  isCurrentUser,
  postId,
  content,
  images,
  createdAt,
  updatedAt,
  displayMenu,
  commentId,
  commentReactions,
  deletable,
  handleMenuClick,
}: {
  user: AuthorResponse;
  isCurrentUser: boolean;
  postId?: string;
  content?: string;
  images: UserImageResponse[];
  createdAt?: Date;
  updatedAt?: Date;
  displayMenu: boolean;
  commentId: string;
  commentReactions: ReactionResponse[];
  deletable: boolean;
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
      className="flex flex-row gap-4 items-start w-full"
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
              deletable={deletable}
              handleMenuClick={handleMenuClick}
            />
          )}
        </div>
        {images.length > 0 && (
          <div className="w-28 md:w-44">
            <ImageSlider images={images} sizes="h-[100px] md:h-[150px]" />
          </div>
        )}
        <div className="flex text-xs md:text-sm text-dark-100 font-thin break-all">
          {content && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          )}
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
