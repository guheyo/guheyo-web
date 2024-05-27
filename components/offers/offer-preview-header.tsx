'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { OfferStatus } from '@/lib/offer/offer.types';
import PostPreviewTitle from '../posts/post-preview-title';
import OfferMenu from './offer-menu';
import PostCreatedAt from '../posts/post-created-at';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferPreviewHeader({ offer }: Props) {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 md:items-start">
        <div className="flex-1">
          <PostPreviewTitle
            name0={offer.name0!}
            name1={offer.name1 || undefined}
          />
        </div>
        <div className="flex-none">
          <PostCreatedAt createdAt={offer.bumpedAt} />
        </div>
      </div>
      <div className="h-4 mt-[-10px]">
        <OfferMenu
          offerId={offer.id}
          postId={offer.post.id}
          offerStatus={offer.status as OfferStatus}
          userId={offer.post.user.id}
          privateOnly
          archivedAt={offer.post.archivedAt}
        />
      </div>
    </div>
  );
}
