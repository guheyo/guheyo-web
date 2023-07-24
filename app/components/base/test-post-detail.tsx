'use client';

import { memo, MouseEventHandler } from 'react';
import Dialog from '@mui/material/Dialog';
import TestImageCarousel from '@/app/components/base/test-image-carousel';
import { Post } from 'prisma';
import moment from 'moment';
import { getPostTitle, getPrice } from '@/app/lib/post';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import UserProfile from '../users/user-profile';

interface Props {
  post: Post;
  open: boolean;
  handleOpen: MouseEventHandler;
}

const TestPostDetail = ({ post, open, handleOpen }: Props) => {
  return (
    <Dialog open={open} onClose={handleOpen} fullWidth maxWidth={'md'}>
      <div className="relative w-full h-screen max-h-[600px] min-h-[600px] md:max-h-[500px] flex flex-col md:flex-row">
        <div className={'w-full h-[60%] md:basis-7/12 md:h-full'}>
          <TestImageCarousel images={post.images} />
        </div>
        <div
          className={
            'w-full h-[40%] md:basis-5/12 md:h-full flex flex-col p-4 overflow-y-scroll'
          }
        >
          <div className="flex flex-row gap-2 text-sm md:text-base items-center">
            <UserProfile
              user={post.user}
              displayAvatar
              displayUsername
              displayDM
            />
            <div className="justify-self-end text-[10px] md:text-xs text-gray-600">
              {moment(post.createdAt).fromNow()}
            </div>
          </div>
          <div className="my-2 text-base md:text-lg font-semibold">
            {getPostTitle(post)}
          </div>
          <div className="my-2 text-base md:text-lg font-semibold">
            {getPrice(post)}
          </div>
          <div className={'h-[1px] border-b-[1px] my-2'} />
          <div className="text-sm md:text-base">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default memo(TestPostDetail);
