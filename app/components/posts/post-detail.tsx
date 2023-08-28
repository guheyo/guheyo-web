'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Post } from 'prisma';
import dayjs from 'dayjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getPostTitle, getPrice } from '@/app/lib/post';
import UserProfile from '../users/user-profile';
import ImageSlider from '../base/image-slider';

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

  const convertPrice = (price: string): string => {
    const numReg = /(\d+)/;
    const matchReg = price.match(numReg);

    if (!matchReg) {
      return 'invalid ipt';
    }
    const amount = parseInt(matchReg[0], 10);

    if (price.includes('천원')) {
      return `${new Intl.NumberFormat('ko-KR').format(amount)}원`;
    }
    if (price.includes('만원')) {
      return `${new Intl.NumberFormat('ko-KR').format(amount * 10000)}원`;
    }
    if (price.includes('백만원')) {
      return `${new Intl.NumberFormat('ko-KR').format(amount * 1000000)}원`;
    }
    return `${new Intl.NumberFormat('ko-KR').format(amount)}원`;
  };

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
            <ImageSlider
              images={post.images}
              sizes={sizes}
              width={760}
              height={760}
            />
          </div>
          <div className="flex-none  border-l-0 md:border-l-2 border-gray-100 line-break md:w-[50%] md:pl-[3.334%] pr-5 pl-5">
            <div className="p-2 font-medium pl-0 pr-0">
              <div className="border-b-[1px]">
                <div className="flex flex-row gap-2 text-sm md:text-base items-center pl-2">
                  <UserProfile
                    user={post.user}
                    displayAvatar
                    displayUsername
                    displayDM
                  />
                  <div className="justify-self-end text-[10px] md:text-xs text-gray-600">
                    {dayjs(post.createdAt).fromNow()}
                  </div>
                </div>
                <div className="p-2 flex flex-col gap-2 mt-1">
                  <div className="text-[18px] font-normal">
                    {getPostTitle(post)}
                  </div>
                  <div className="flex md:text-base justify-self-end  mt-[16px] items-center justify-between mb-[16px]">
                    <span className="text-[12px] text-gray-600">거래가</span>
                    <span className="text-[18px] font-bold">
                      {convertPrice(getPrice(post))}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 pt-4 text-sm md:text-base md:h-[30rem] overflow-y-auto">
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
