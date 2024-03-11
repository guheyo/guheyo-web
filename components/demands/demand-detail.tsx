'use client';

import dayjs from 'dayjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { useFindDemandQuery } from '@/generated/graphql';
import { getPrice, truncateName } from '@/lib/formatter';
import UserProfilePopper from '../users/user-profile-popper';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import DealMenu from '../deals/deal-menu';

export default function DemandDetail({ slug }: { slug: string }) {
  const { loading, data } = useFindDemandQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });

  if (loading) return <div />;
  if (!data?.findDemand) return <div />;
  const demand = data.findDemand;

  const sizes = 'h-[360px] md:h-[524px]';

  if (demand.images.length > 0)
    return (
      <PostDetail>
        <div className="w-full md:w-[45%]">
          <ImageSlider images={demand.images} sizes={sizes} />
        </div>
        <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
          <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <UserProfilePopper
                user={demand.buyer}
                displayAvatar
                displayUsername
                displayDM
                mode="standard"
              />
              <div className="justify-self-end text-[10px] md:text-xs text-gray-400">
                {dayjs(demand.bumpedAt).fromNow()}
              </div>
            </div>
            <div className="mr-[-24px]">
              <DealMenu
                dealType="demand"
                dealId={demand.id}
                authorId={demand.buyer.id}
                groupSlug={demand.group.slug!}
                slug={demand.slug!}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
            <div className="text-lg md:text-xl font-semibold">
              {truncateName(demand.name, 45)}
            </div>
            <div className="flex text-base md:text-lg justify-self-end mt-0 items-center mb-4 font-semibold">
              {getPrice(demand.price)}
            </div>
          </div>
          <div className="pt-4 text-base md:text-base md:h-[30rem] overflow-y-auto pb-20">
            {demand.description && (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {demand.description}
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
              user={demand.buyer}
              displayAvatar
              displayUsername
              displayDM
              mode="standard"
            />
            <div className="justify-self-end text-[10px] md:text-xs text-gray-400">
              {dayjs(demand.bumpedAt).fromNow()}
            </div>
          </div>
          <div className="mr-[-24px]">
            <DealMenu
              dealType="demand"
              dealId={demand.id}
              authorId={demand.buyer.id}
              groupSlug={demand.group.slug!}
              slug={demand.slug!}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
          <div className="text-lg md:text-xl font-semibold">{demand.name}</div>
          <div className="flex text-base md:text-lg justify-self-end mt-0 items-center mb-4 font-semibold">
            {getPrice(demand.price)}
          </div>
        </div>
        <div className="pt-4 text-base md:text-base md:h-fit overflow-y-auto pb-20">
          {demand.description && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {demand.description}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </PostDetail>
  );
}
