'use client';

import { Dialog, DialogContent } from '@mui/material';
import { Post } from 'prisma';
import moment from 'moment';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostTitle, getPrice } from '@/app/lib/post';
import UserProfile from '../users/user-profile';
import ImageCarousel from '../base/image-carousel';

export default function PostDetailCard({
  post,
  open,
  handleOpen,
}: {
  post: Post;
  open: boolean;
  handleOpen: React.MouseEventHandler;
}) {
  const sizes = 'w-full h-full';

  return (
    <Dialog
      open={open}
      onClose={handleOpen}
      maxWidth="md"
      className="max-w-screen max-h-screen backdrop-blur-sm"
    >
      <DialogContent className="overflow-scroll no-scrollbar p-0">
        <div className="flex flex-col md:flex-row w-full min-h-[32rem]">
          <div className="rounded-tl-md rounded-bl-none rounded-tr-md md:rounded-tl-md md:rounded-bl-md md:rounded-tr-none">
            <ImageCarousel
              images={post.images}
              sizes={sizes}
              width={1920}
              height={1920}
            />
          </div>
          <div className="flex-none md:max-w-xs lg:max-w-sm border-t-2 md:border-t-0 border-l-0 md:border-l-2 border-gray-100 line-break">
            <div className="p-2 font-medium">
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
              <div className="p-2 flex flex-row gap-2 justify-between items-center">
                <div className="text-sm md:text-base font-semibold">
                  {getPostTitle(post)}
                </div>
                <div className="flex-none text-sm md:text-base justify-self-end">
                  {getPrice(post)}
                </div>
              </div>
              <div className="p-2 pt-4 text-sm md:text-base">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
