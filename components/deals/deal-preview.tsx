'use client';

import { ReportResponse, UserImageResponse } from '@/generated/graphql';
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
  price: number;
  bumpedAt: Date;
  username: string;
  slug: string;
  reports: ReportResponse[];
}

export default function DealPreview({
  deal,
  dealId,
  authorId,
  type,
  thumbnail,
  name,
  price,
  bumpedAt,
  username,
  slug,
  reports,
}: Props) {
  switch (type) {
    case 'text': {
      return (
        <DealTextPreview
          deal={deal}
          dealId={dealId}
          authorId={authorId}
          name={name}
          price={price}
          bumpedAt={bumpedAt}
          username={username}
          slug={slug}
          reports={reports}
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
          price={price}
          bumpedAt={bumpedAt}
          username={username}
          slug={slug}
          reports={reports}
        />
      );
    }
    default: {
      return <div />;
    }
  }
}
