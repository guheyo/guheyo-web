'use client';

import { OfferResponse } from '@/generated/graphql';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import OfferDetailMain from './offer-detail-main';

export default function OfferDetail({ offer }: { offer: OfferResponse }) {
  if (offer.post.images.length > 0)
    return (
      <PostDetail>
        <div className="w-full md:w-[45%]">
          <ImageSlider
            images={offer.post.images}
            sizes="h-[360px] md:h-[524px]"
          />
        </div>

        <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
          <OfferDetailMain offer={offer} />
        </div>
      </PostDetail>
    );

  return (
    <PostDetail>
      <div className="flex-none line-break w-full md:w-[90%] px-4 md:px-0 py-4 md:py-0">
        <OfferDetailMain offer={offer} />
      </div>
    </PostDetail>
  );
}
