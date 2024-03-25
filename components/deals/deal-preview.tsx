'use client';

import { UserImageResponse } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import DealTextPreview from './deal-text-preview';
import DealThumbnailPreview from './deal-thumbnail-preview';

interface Props {
  deal: Deal;
  dealId: string;
  authorId: string;
  type: 'text' | 'thumbnail';
  thumbnail?: UserImageResponse | null;
  name: any;
  totalPrice: number;
  bumpedAt: Date;
  username: string;
  slug: string;
  reportCount: number;
  reportCommentCount: number;
}

export default function DealPreview({
  deal,
  dealId,
  authorId,
  type,
  thumbnail,
  name,
  totalPrice,
  bumpedAt,
  username,
  slug,
  reportCount,
  reportCommentCount,
}: Props) {
  const hasUncommentedReports = reportCount - reportCommentCount > 0;

  switch (type) {
    case 'text': {
      return (
        <DealTextPreview
          deal={deal}
          dealId={dealId}
          authorId={authorId}
          name={name}
          totalPrice={totalPrice}
          bumpedAt={bumpedAt}
          username={username}
          slug={slug}
          reportCount={reportCount}
          reportCommentCount={reportCommentCount}
          hasUncommentedReports={hasUncommentedReports}
        />
      );
    }
    case 'thumbnail': {
      return (
        <DealThumbnailPreview
          deal={deal}
          dealId={dealId}
          authorId={authorId}
          thumbnail={thumbnail}
          name={name}
          totalPrice={totalPrice}
          bumpedAt={bumpedAt}
          username={username}
          slug={slug}
          reportCount={reportCount}
          reportCommentCount={reportCommentCount}
          hasUncommentedReports={hasUncommentedReports}
        />
      );
    }
    default: {
      return <div />;
    }
  }
}
