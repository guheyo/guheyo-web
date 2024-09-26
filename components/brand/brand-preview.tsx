'use client';

import { BrandPreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import BrandThumbnailPreview from './brand-thumbnail-preview';
import BrandListviewPreview from './brand-listview-preview';

interface Props {
  type: PostPreviewType;
  brand: BrandPreviewResponse;
  isInGroup: boolean;
}

export default function BrandPreview({ type, brand, isInGroup }: Props) {
  switch (type) {
    case 'thumbnail': {
      return <BrandThumbnailPreview brand={brand} isInGroup={isInGroup} />;
    }
    case 'listview': {
      return <BrandListviewPreview brand={brand} isInGroup={isInGroup} />;
    }
    default: {
      return <div />;
    }
  }
}
