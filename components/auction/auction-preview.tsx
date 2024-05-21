'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import AuctionThumbnailPreview from './auction-thumbnail-preview';

interface Props {
  auction: AuctionPreviewResponse;
}

export default function AuctionPreview({ auction }: Props) {
  return <AuctionThumbnailPreview auction={auction} />;
}
