'use client';

import { OfferResponse } from '@/generated/graphql';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import OfferDetailMain from './offer-detail-main';
import PostDetailMainLayout from '../posts/post-detail-main.layout';

export default function OfferDetail({ offer }: { offer: OfferResponse }) {
  if (offer.post.images.length > 0)
    return (
      <PostDetail>
        <ImageSlider
          images={offer.post.images}
          sizes="h-[360px] md:h-[500px]"
        />
        <PostDetailMainLayout>
          <OfferDetailMain offer={offer} />
        </PostDetailMainLayout>
      </PostDetail>
    );

  return (
    <PostDetail>
      <PostDetailMainLayout>
        <OfferDetailMain offer={offer} />
      </PostDetailMainLayout>
    </PostDetail>
  );
}
