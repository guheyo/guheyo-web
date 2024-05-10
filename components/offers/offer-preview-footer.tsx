'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { OfferStatus } from '@/lib/offer/offer.types';
import OfferPreviewPrice from './offer-preview-price';

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
    </div>
  );
}
