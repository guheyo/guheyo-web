'use client';

import _ from 'lodash';
import { Auction } from 'prisma';
import moment from 'moment';
import 'moment/locale/ko';
import { getPostTitle, getPrice } from '@/app/lib/post';
import { useState } from 'react';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import PostDetail from './auction-detail';
import UserProfile from '../users/user-profile';
import ReadMore from '../base/read-more';
import Thumbnail from '../base/thumbnail';

interface Props {
  type: string;
  auction: Auction;
  cols: number;
}

export default function AuctionPreview({ type, auction, cols }: Props) {
  const sizes =
    type === 'buy'
      ? 'w-48 h-36 md:w-96 md:h-72'
      : cols === 1
      ? 'w-96 h-72'
      : 'w-48 sm:w-72 md:w-96 h-36 md:h-72';
  const thumbnail = _.get(auction.images, '[0]');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  if (type === 'buy') {
    return (
      <div className="flex flex-col overflow-hidden shadow line-break max-w-lg">
        <div className="flex gap-3 font-medium items-center p-1 md:p-2">
          <div className="flex-none">
            <UserProfile
              user={auction.user}
              displayAvatar
              displayUsername={false}
              displayDM
            />
          </div>
          <div className="flex-1 pr-1 flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 text-sm font-normal items-center">
                <UserProfile
                  user={auction.user}
                  displayAvatar={false}
                  displayUsername
                  displayDM
                />
                <div className="text-[10px] md:text-xs text-gray-600">
                  {moment(auction.createdAt).fromNow()}
                </div>
              </div>
              <div className="text-xs md:text-base font-semibold">
                {getPostTitle(auction)}
              </div>
            </div>
            <div className="flex-none text-xs md:text-base">
              {getPrice(auction)}
            </div>
          </div>
        </div>
        {thumbnail && (
          <div className="flex pl-10 md:pl-14 pr-20 md:pr-20">
            <div className="relative">
              <button
                type="submit"
                onClick={() => handleOpen()}
                className="group"
              >
                <Thumbnail
                  image={thumbnail}
                  sizes={sizes}
                  width={384}
                  height={288}
                />
                <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
                  <ChatBubbleOvalLeftIcon
                    color="white"
                    fill="white"
                    className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
                  />
                </div>
              </button>
              <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
                <PostDetail
                  auction={auction}
                  open={open}
                  handleOpen={handleOpen}
                />
              </div>
            </div>
          </div>
        )}
        {!thumbnail && (
          <div className="flex px-10 md:px-14 text-xs md:text-sm">
            <ReadMore text={auction.content} maxLine={0} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden shadow line-break">
      <div className="flex p-1 md:p-2 font-medium">
        <div className="flex flex-row gap-2 items-center">
          <UserProfile
            user={auction.user}
            displayAvatar
            displayUsername
            displayDM
          />
          <div className="justify-self-end text-[10px] md:text-xs text-gray-600">
            {moment(auction.createdAt).fromNow()}
          </div>
        </div>
      </div>
      {thumbnail && (
        <div className="flex relative">
          <button type="submit" onClick={() => handleOpen()} className="group">
            <Thumbnail
              image={thumbnail}
              sizes={sizes}
              width={384}
              height={288}
            />
            <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </button>
          <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
            <PostDetail auction={auction} open={open} handleOpen={handleOpen} />
          </div>
        </div>
      )}
      <div className="flex flex-row gap-1 p-1.5 md:p-4 justify-between items-center">
        <div className="text-xs md:text-base font-semibold">
          {getPostTitle(auction)}
        </div>
        <div className="flex-none text-xs md:text-base">
          {getPrice(auction)}
        </div>
      </div>
    </div>
  );
}
