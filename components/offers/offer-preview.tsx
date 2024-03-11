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
      type={type}
      thumbnail={offer.thumbnail}
      name={truncateName(offer.name, 45)}
      price={offer.price}
      bumpedAt={offer.bumpedAt}
      username={offer.seller.username}
      slug={offer.slug!}
    />
  );
}
