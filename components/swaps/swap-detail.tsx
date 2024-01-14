'use client';

import dayjs from 'dayjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { SwapResponse } from '@/generated/graphql';
import { getPrice } from '@/lib/formatter';
import UserProfile from '../users/user-profile';
import ImageSlider from '../base/image-slider';
import SwapName from './swap-name';
import PostDetail from '../posts/post-detail';

export default function SwapDetail({ swap }: { swap: SwapResponse }) {
  const sizes = 'h-[360px] md:h-[524px]';

  return (
    <PostDetail>
      <div className="w-full md:w-[45%]">
        <ImageSlider images={swap.images} sizes={sizes} />
      </div>

      <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
        <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center">
          <UserProfile
            user={swap.proposer}
            displayAvatar
            displayUsername
            displayDM
            mode="standard"
          />
          <div className="justify-self-end text-[10px] md:text-xs text-gray-400">
            {dayjs(swap.createdAt).fromNow()}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
          <div className="text-lg md:text-xl font-semibold">
            <SwapName name0={swap.name0} name1={swap.name1} />
          </div>
          <div className="flex text-base md:text-lg justify-self-end mt-0 items-center mb-4 font-semibold">
            {getPrice(swap.price)}
          </div>
        </div>
        <div className="pt-4 text-base md:text-base md:h-[30rem] overflow-y-auto pb-20">
          {swap.description0 && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {swap.description0}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </PostDetail>
  );
}
