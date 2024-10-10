'use client';

import { BrandPreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import BrandThumbnailPreview from './brand-thumbnail-preview';
import BrandListviewPreview from './brand-listview-preview';

interface Props {
  type: PostPreviewType;
  brand: BrandPreviewResponse;
  displayGroup: boolean;
}

export default function BrandPreview({ type, brand, displayGroup }: Props) {
  switch (type) {
    case 'thumbnail': {
      return (
        <BrandThumbnailPreview brand={brand} displayGroup={displayGroup} />
      );
    }
    case 'listview': {
      return <BrandListviewPreview brand={brand} displayGroup={displayGroup} />;
    }
    default: {
      return <div />;
    }
  }
}
