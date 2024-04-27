'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { OfferStatus } from '@/lib/offer/offer.types';
import OfferPreviewPrice from './offer-preview-price';
import PostAddons from '../posts/post-addons';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferPreviewFooter({ offer }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <OfferPreviewPrice
        offerStatus={offer.status as OfferStatus}
        totalPrice={offer.totalPrice}
      />
      <div className="absolute bottom-4 right-4 md:right-5">
        <PostAddons
          createdAt={offer.bumpedAt}
          reportCount={offer.post.reportCount}
          reportCommentCount={offer.post.reportCommentCount}
        />
      </div>
    </div>
  );
}
