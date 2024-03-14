'use client';

import dayjs from 'dayjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { getPrice } from '@/lib/formatter';
import { AuthorResponse, UserImageResponse } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import UserProfilePopper from '../users/user-profile-popper';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import DealMenu from './deal-menu';
import SwapName from '../swaps/swap-name';

export default function DealDetail({
  dealType,
  id,
  name0,
  name1,
  price,
  description,
  bumpedAt,
  author,
  images,
}: {
  dealType: Deal;
  id: string;
  name0: string;
  name1?: string;
  price: number;
  description?: string | null;
  bumpedAt: Date;
  author: AuthorResponse;
  images: UserImageResponse[];
}) {
  if (images.length > 0)
    return (
      <PostDetail>
        <div className="w-full md:w-[45%]">
          <ImageSlider images={images} sizes="h-[360px] md:h-[524px]" />
        </div>

        <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
          <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <UserProfilePopper
                user={author}
                displayAvatar
                displayUsername
                displayDM
                mode="standard"
              />
              <div className="justify-self-end text-[10px] md:text-xs text-gray-400">
                {dayjs(bumpedAt).fromNow()}
              </div>
            </div>
            <div className="mr-[-24px]">
              <DealMenu dealType={dealType} dealId={id} authorId={author.id} />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
            <div className="text-lg md:text-xl font-semibold">
              {name1 ? <SwapName name0={name0} name1={name1} /> : name0}
            </div>
            <div className="flex text-base md:text-lg justify-self-end mt-0 items-center mb-4 font-semibold">
              {getPrice(price)}
            </div>
          </div>
          <div className="pt-4 text-base md:text-base md:h-[30rem] overflow-y-auto pb-20">
            {description && (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {description}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </PostDetail>
    );

  return (
    <PostDetail>
      <div className="flex-none line-break w-full md:w-[90%] px-4 md:px-0 py-4 md:py-0">
        <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <UserProfilePopper
              user={author}
              displayAvatar
              displayUsername
              displayDM
              mode="standard"
            />
            <div className="justify-self-end text-[10px] md:text-xs text-gray-400">
              {dayjs(bumpedAt).fromNow()}
            </div>
          </div>
          <div className="mr-[-24px]">
            <DealMenu dealType={dealType} dealId={id} authorId={author.id} />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
          <div className="text-lg md:text-xl font-semibold">
            {name1 ? <SwapName name0={name0} name1={name1} /> : name0}
          </div>
          <div className="flex text-base md:text-lg justify-self-end mt-0 items-center mb-4 font-semibold">
            {getPrice(price)}
          </div>
        </div>
        <div className="pt-4 text-base md:text-base md:h-fit overflow-y-auto pb-20">
          {description && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {description}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </PostDetail>
  );
}