'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import OfferTextPreview from './offer-text-preview';
import OfferThumbnailPreview from './offer-thumbnail-preview';

interface Props {
  type: 'text' | 'thumbnail';
  offer: OfferPreviewResponse;
}

export default function OfferPreview({ type, offer }: Props) {
  switch (type) {
    case 'text': {
      return <OfferTextPreview offer={offer} />;
    }
    case 'thumbnail': {
      return <OfferThumbnailPreview offer={offer} />;
    }
    default: {
      return <div />;
    }
  }
}
