'use client';

import dayjs from 'dayjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { useFindOfferQuery } from '@/generated/graphql';
import { getPrice } from '@/lib/formatter';
import UserProfilePopper from '../users/user-profile-popper';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import DealMenu from '../deals/deal-menu';

export default function OfferDetail({ slug }: { slug: string }) {
  const { loading, data } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });

  if (loading) return <div />;
  if (!data?.findOffer) return <div />;
  const offer = data.findOffer;
  const sizes = 'h-[360px] md:h-[524px]';

  return (
    <PostDetail>
      <div className="w-full md:w-[45%]">
        <ImageSlider images={offer.images} sizes={sizes} />
      </div>

      <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
        <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <UserProfilePopper
              user={offer.seller}
              displayAvatar
              displayUsername
              displayDM
              mode="standard"
            />
            <div className="justify-self-end text-[10px] md:text-xs text-gray-400">
              {dayjs(offer.createdAt).fromNow()}
            </div>
          </div>
          <div className="mr-[-24px]">
            <DealMenu
              dealType="offer"
              dealId={offer.id}
              authorId={offer.seller.id}
              groupSlug={offer.group.slug!}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
          <div className="text-lg md:text-xl font-semibold">{offer.name}</div>
          <div className="flex text-base md:text-lg justify-self-end mt-0 items-center mb-4 font-semibold">
            {getPrice(offer.price)}
          </div>
        </div>
        <div className="pt-4 text-base md:text-base md:h-[30rem] overflow-y-auto pb-20">
          {offer.description && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {offer.description}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </PostDetail>
  );
}
