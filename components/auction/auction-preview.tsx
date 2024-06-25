'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import AuctionThumbnailPreview from './auction-thumbnail-preview';
import AuctionTextPreview from './auction-text-preview';
import AuctionListViewPreview from './auction-listview-preview';

interface Props {
  type: 'text' | 'thumbnail' | 'listview';
  auction: AuctionPreviewResponse;
  isInGroup: boolean;
}

export default function AuctionPreview({ type, auction, isInGroup }: Props) {
  switch (type) {
    case 'text': {
      return <AuctionTextPreview auction={auction} isInGroup={isInGroup} />;
    }
    case 'thumbnail': {
      return (
        <AuctionThumbnailPreview auction={auction} isInGroup={isInGroup} />
      );
    }
    case 'listview': {
      return <AuctionListViewPreview auction={auction} isInGroup={isInGroup} />;
    }
    default: {
      return <div />;
    }
  }
}
