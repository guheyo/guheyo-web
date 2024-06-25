'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import OfferTextPreview from './offer-text-preview';
import OfferThumbnailPreview from './offer-thumbnail-preview';
import OfferListViewPreview from './offer-listview-preview';

interface Props {
  type: PostPreviewType;
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
    case 'listview': {
      return <OfferListViewPreview offer={offer} />;
    }
    default: {
      return <div />;
    }
  }
}
