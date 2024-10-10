'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import AuctionThumbnailPreview from './auction-thumbnail-preview';
import AuctionTextPreview from './auction-text-preview';
import AuctionListViewPreview from './auction-listview-preview';

interface Props {
  type: PostPreviewType;
  auction: AuctionPreviewResponse;
  displayGroup: boolean;
}

export default function AuctionPreview({ type, auction, displayGroup }: Props) {
  switch (type) {
    case 'text': {
      return (
        <AuctionTextPreview auction={auction} displayGroup={displayGroup} />
      );
    }
    case 'thumbnail': {
      return (
        <AuctionThumbnailPreview
          auction={auction}
          displayGroup={displayGroup}
        />
      );
    }
    case 'listview': {
      return (
        <AuctionListViewPreview auction={auction} displayGroup={displayGroup} />
      );
    }
    default: {
      return <div />;
    }
  }
}
