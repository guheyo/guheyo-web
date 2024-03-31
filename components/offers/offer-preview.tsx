'use client';

import { truncateText } from '@/lib/text/truncate-text';
import { OfferPreviewFragment } from '@/generated/graphql';
import { DealStatus } from '@/lib/deal/deal.types';
import DealPreview from '../deals/deal-preview';

interface Props {
  offer: OfferPreviewFragment;
  type: 'text' | 'thumbnail';
}

export default function OfferPreview({ offer, type }: Props) {
  return (
    <DealPreview
      dealId={offer.id}
      deal="offer"
      dealStatus={offer.status as DealStatus}
      authorId={offer.seller.id}
      type={type}
      thumbnail={offer.thumbnail}
      name={truncateText(offer.name, 42)}
      totalPrice={offer.totalPrice}
      bumpedAt={offer.bumpedAt}
      username={offer.seller.username}
      slug={offer.slug!}
      reportCount={offer.reportCount}
      reportCommentCount={offer.reportCommentCount}
      isHidden={offer.isHidden}
    />
  );
}
