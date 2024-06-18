'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import AuctionThumbnailPreview from './auction-thumbnail-preview';

interface Props {
  auction: AuctionPreviewResponse;
  isInGroup: boolean;
}

export default function AuctionPreview({ auction, isInGroup }: Props) {
  return <AuctionThumbnailPreview auction={auction} isInGroup={isInGroup} />;
}
