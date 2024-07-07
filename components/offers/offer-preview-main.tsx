'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { OfferStatus } from '@/lib/offer/offer.types';
import OfferPreviewPrice from './offer-preview-price';
import PostCategory from '../posts/post-category';
import OfferPreviewTitle from './offer-preview-title';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferPreviewMain({ offer }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <OfferPreviewTitle
        name0={offer.name0!}
        name1={offer.name1 || undefined}
      />
      <OfferPreviewPrice
        offerStatus={offer.status as OfferStatus}
        totalPrice={offer.totalPrice}
      />
      <PostCategory category={offer.post.category!} />
    </div>
  );
}
