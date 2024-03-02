'use client';

import { UserImageResponse } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import DealTextPreview from './deal-text-preview';
import DealThumbnailPreview from './deal-thumbnail-preview';

interface Props {
  deal: Deal;
  type: 'text' | 'thumbnail';
  thumbnail?: UserImageResponse | null;
  name: any;
  price: number;
  createdAt: Date;
  username: string;
  slug: string;
}

export default function DealPreview({
  deal,
  type,
  thumbnail,
  name,
  price,
  createdAt,
  username,
  slug,
}: Props) {
  switch (type) {
    case 'text': {
      return (
        <DealTextPreview
          deal={deal}
          name={name}
          price={price}
          createdAt={createdAt}
          username={username}
          slug={slug}
        />
      );
    }
    case 'thumbnail': {
      return (
        <DealThumbnailPreview
          deal={deal}
          thumbnail={thumbnail}
          name={name}
          price={price}
          createdAt={createdAt}
          username={username}
          slug={slug}
        />
      );
    }
    default: {
      return <div />;
    }
  }
}
