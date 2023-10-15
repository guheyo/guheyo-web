'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Post } from 'prisma';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getPostTitle, getAuctionDate, getPrice } from '@/app/lib/post';
import UserProfile from '../users/user-profile';
import ImageCarousel from '../base/image-carousel';

export default function AuctionDetailCard({
  post,
  open,
  handleOpen,
}: {
  post: Post;
  open: boolean;
  handleOpen: React.MouseEventHandler;
}) {
  const sizes = 'w-full h-full';

  const auctionPost = post.auctionPost!;

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
        className="p-0 overflow-auto md:overflow-hidden"
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
            <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-2 text-sm md:text-base items-center p-2 justify-between ">
                <UserProfile
                  user={auctionPost.user}
                  displayAvatar
                  displayUsername
                  displayDM
                />
                <div className="justify-self-end text-[10px] md:text-xs text-gray-600">
                  {getAuctionDate(post.auctionPost!)}
                </div>
              </div>
              <ImageCarousel
                images={auctionPost.images}
                sizes={sizes}
                width={760}
                height={760}
              />
              <div className="py-5 p-3 text-sm md:text-base overflow-y-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {auctionPost.content}
                </ReactMarkdown>
              </div>
              <div className="py-5 p-3 text-sm md:text-base text-right">
                현재입찰: {getPrice(post)}
              </div>
            </div>
          </div>
          <div className="flex-none border-t-2 md:border-t-0 border-l-0 md:border-l-2 border-gray-100 line-break md:w-[50%] md:pl-[3.334%] pr-5 pl-5">
            <div className="p-2 font-medium pl-0 pr-0">
              <div className="border-b-[1px] w-full">
                <div className="p-2 flex flex-row gap-2 justify-between items-center">
                  <div className="text-sm md:text-base font-semibold">
                    {getPostTitle(post)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
