'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import OfferTextPreview from './offer-text-preview';
import OfferThumbnailPreview from './offer-thumbnail-preview';
import OfferListViewPreview from './offer-listview-preview';

interface Props {
  type: PostPreviewType;
  offer: OfferPreviewResponse;
  displayGroup: boolean;
}

export default function OfferPreview({ type, offer, displayGroup }: Props) {
  switch (type) {
    case 'text': {
      return <OfferTextPreview offer={offer} displayGroup={displayGroup} />;
    }
    case 'thumbnail': {
      return (
        <OfferThumbnailPreview offer={offer} displayGroup={displayGroup} />
      );
    }
    case 'listview': {
      return <OfferListViewPreview offer={offer} displayGroup={displayGroup} />;
    }
    default: {
      return <div />;
    }
  }
}
