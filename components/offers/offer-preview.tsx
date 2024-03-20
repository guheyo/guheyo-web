'use client';

import { truncateName } from '@/lib/formatter';
import { OfferPreviewFragment } from '@/generated/graphql';
import DealPreview from '../deals/deal-preview';

interface Props {
  offer: OfferPreviewFragment;
  type: 'text' | 'thumbnail';
}

export default function OfferPreview({ offer, type }: Props) {
  return (
    <DealPreview
      deal="offer"
      dealId={offer.id}
      authorId={offer.seller.id}
      type={type}
      thumbnail={offer.thumbnail}
      name={truncateName(offer.name, 42)}
      totalPrice={offer.totalPrice}
      bumpedAt={offer.bumpedAt}
      username={offer.seller.username}
      slug={offer.slug!}
      reports={offer.reports}
    />
  );
}
