'use client';

import { parseCommentDate } from '@/lib/comment/parse-comment-date';
import {
  AuthorResponse,
  ReactionResponse,
  UserImageResponse,
} from '@/generated/graphql';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ThreadMode } from '@/lib/thread/thread.types';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import ReactionBar from '../reaction/reaction-bar';
import ImageSlider from '../base/image-slider';

export default function ThreadOutput({
  user,
  isCurrentUser,
  isAuthor,
  postId,
  content,
  images,
  createdAt,
  updatedAt,
  displayMenu,
  commentReactions,
  editable,
  deletable,
  handleMenuClick,
}: {
  user: AuthorResponse;
  isCurrentUser: boolean;
  isAuthor: boolean;
  postId?: string;
  content?: string;
  images: UserImageResponse[];
  createdAt?: Date;
  updatedAt?: Date;
  displayMenu: boolean;
  commentReactions: ReactionResponse[];
  editable: boolean;
  deletable: boolean;
  handleMenuClick: (mode: ThreadMode) => void;
}) {
  const device = useDeviceDetect();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            {isAuthor && (
              <div className="text-gray-400">
                <EmojiEmotionsIcon fontSize="inherit" />
              </div>
            )}
            <div>{parseCommentDate({ createdAt, updatedAt })}</div>
          </div>
          {/* TODO: ThreadMenu */}
        </div>
        {images.length > 0 && (
          <div className="w-28 md:w-44">
            <ImageSlider images={images} sizes="h-[100px] md:h-[150px]" />
          </div>
        )}
        <div className="text-xs md:text-sm text-dark-100 font-thin break-all">
          {content && (
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          )}
        </div>
        {postId && (
          <div className="pt-1 ml-[-10px]">
            <ReactionBar postId={postId} reactions={reactions} />
          </div>
        )}
      </div>
    </div>
  );
}
