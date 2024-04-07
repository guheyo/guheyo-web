'use client';

import { UserImageResponse } from '@/generated/graphql';
import { DealType, DealStatus } from '@/lib/deal/deal.types';
import DealTextPreview from './deal-text-preview';
import DealThumbnailPreview from './deal-thumbnail-preview';

interface Props {
  dealId: string;
  dealType: DealType;
  dealStatus: DealStatus;
  authorId: string;
  type: 'text' | 'thumbnail';
  thumbnail?: UserImageResponse | null;
  name: any;
  totalPrice: number;
  bumpedAt: Date;
  slug: string;
  reportCount: number;
  reportCommentCount: number;
  isHidden: boolean;
}

export default function DealPreview({
  dealId,
  dealType,
  dealStatus,
  authorId,
  type,
  thumbnail,
  name,
  totalPrice,
  bumpedAt,
  slug,
  reportCount,
  reportCommentCount,
  isHidden,
}: Props) {
  switch (type) {
    case 'text': {
      return (
        <DealTextPreview
          dealId={dealId}
          dealType={dealType}
          dealStatus={dealStatus}
          authorId={authorId}
          name={name}
          totalPrice={totalPrice}
          bumpedAt={bumpedAt}
          slug={slug}
          reportCount={reportCount}
          reportCommentCount={reportCommentCount}
          isHidden={isHidden}
        />
      );
    }
    case 'thumbnail': {
      return (
        <DealThumbnailPreview
          dealId={dealId}
          dealType={dealType}
          dealStatus={dealStatus}
          authorId={authorId}
          thumbnail={thumbnail}
          name={name}
          totalPrice={totalPrice}
          bumpedAt={bumpedAt}
          slug={slug}
          reportCount={reportCount}
          reportCommentCount={reportCommentCount}
          isHidden={isHidden}
        />
      );
    }
    default: {
      return <div />;
    }
  }
}
