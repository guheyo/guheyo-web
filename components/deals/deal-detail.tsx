'use client';

import { AuthorResponse, UserImageResponse } from '@/generated/graphql';
import { DealType, DealStatus } from '@/lib/deal/deal.types';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import DealDetailMain from './deal-detail-main';

export default function DealDetail({
  id,
  dealType,
  dealStatus,
  name0,
  name1,
  slug,
  price,
  shippingCost,
  shippingType,
  description,
  bumpedAt,
  author,
  images,
  reportCount,
  reportCommentCount,
  isHidden,
}: {
  id: string;
  dealType: DealType;
  dealStatus: DealStatus;
  name0: string;
  name1?: string;
  slug: string;
  price: number;
  shippingCost: number;
  shippingType: string;
  description?: string | null;
  bumpedAt: Date;
  author: AuthorResponse;
  images: UserImageResponse[];
  reportCount: number;
  reportCommentCount: number;
  isHidden: boolean;
}) {
  if (images.length > 0)
    return (
      <PostDetail>
        <div className="w-full md:w-[45%]">
          <ImageSlider images={images} sizes="h-[360px] md:h-[524px]" />
        </div>

        <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
          <DealDetailMain
            id={id}
            dealType={dealType}
            dealStatus={dealStatus}
            name0={name0}
            name1={name1}
            slug={slug}
            price={price}
            shippingCost={shippingCost}
            shippingType={shippingType}
            description={description}
            bumpedAt={bumpedAt}
            author={author}
            reportCount={reportCount}
            reportCommentCount={reportCommentCount}
            isHidden={isHidden}
          />
        </div>
      </PostDetail>
    );

  return (
    <PostDetail>
      <div className="flex-none line-break w-full md:w-[90%] px-4 md:px-0 py-4 md:py-0">
        <DealDetailMain
          id={id}
          dealType={dealType}
          dealStatus={dealStatus}
          name0={name0}
          name1={name1}
          slug={slug}
          price={price}
          shippingCost={shippingCost}
          shippingType={shippingType}
          description={description}
          bumpedAt={bumpedAt}
          author={author}
          reportCount={reportCount}
          reportCommentCount={reportCommentCount}
          isHidden={isHidden}
        />
      </div>
    </PostDetail>
  );
}
