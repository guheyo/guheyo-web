'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { BusinessFunction, OfferStatus } from '@/lib/offer/offer.types';
import BusinessFunctionLabel from './business-function-label';
import OfferMenu from './offer-menu';
import PostCreatedAt from '../posts/post-created-at';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferCredditBar({ offer }: Props) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 items-center">
        <BusinessFunctionLabel
          businessFunction={offer.businessFunction as BusinessFunction}
        />
        <PostCreatedAt createdAt={offer.bumpedAt} />
      </div>
      <div className="h-4 mt-[-22px]">
        <OfferMenu
          offerId={offer.id}
          postId={offer.post.id}
          offerStatus={offer.status as OfferStatus}
          businessFunction={offer.businessFunction as BusinessFunction}
          userId={offer.post.user.id}
          privateOnly
          archivedAt={offer.post.archivedAt}
        />
      </div>
    </div>
  );
}
