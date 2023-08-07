'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Post } from 'prisma';
import moment from 'moment';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { XMarkIcon } from '@heroicons/react/24/outline';
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
      sx={{
        top: '58px',
      }}
      className="max-w-screen z-60"
      slotProps={{
        backdrop: {
          sx: {
            background: 'white',
            top: '58px',
          },
        },
      }}
      PaperProps={{
        sx: {
          overflow: 'unset',
          margin: 0,
          height: '100%',
          width: '100%',
          maxHeight: '100%',
          maxWidth: '80rem',
          boxShadow: '0',
          borderRadius: '0',
        },
      }}
    >
      <DialogContent
        className="p-0 overflow-hidden"
        sx={{
          padding: '0px 0px',
        }}
      >
        <div className="flex justify-end p-1 md:px-6">
          <IconButton onClick={handleOpen}>
            <XMarkIcon className="w-6 md:w-8" />
          </IconButton>
        </div>

        <div className="md:flex md:flex-row justify-center">
          <div className="rounded-tl-md rounded-bl-none rounded-tr-md md:rounded-tl-md md:rounded-bl-md md:rounded-tr-none md:w-[50%]">
            <ImageCarousel
              images={post.images}
              sizes={sizes}
              width={760}
              height={760}
            />
          </div>
          <div className="flex-none border-t-2 md:border-t-0 border-l-0 md:border-l-2 border-gray-100 line-break md:w-[50%] md:pl-[3.334%] pr-5 pl-5">
            <div className="p-2 font-medium pl-0 pr-0">
              <div className="border-b-[1px]">
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
              </div>
              <div className="p-2 pt-4 text-sm md:text-base h-96 overflow-y-auto">
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
