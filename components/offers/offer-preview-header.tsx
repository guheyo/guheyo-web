'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { OfferStatus } from '@/lib/offer/offer.types';
import PostPreviewTitle from '../posts/post-preview-title';
import OfferMenu from './offer-menu';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferPreviewHeader({ offer }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <PostPreviewTitle title={offer.post.title} />
      <div className="h-8">
        <OfferMenu
          offerId={offer.id}
          postId={offer.post.id}
          offerStatus={offer.status as OfferStatus}
          userId={offer.post.user.id}
          privateOnly
          reportCount={offer.post.reportCount}
          reportCommentCount={offer.post.reportCommentCount}
          archivedAt={offer.post.archivedAt}
        />
      </div>
    </div>
  );
}
