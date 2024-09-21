'use client';

import { BrandPreviewResponse } from '@/generated/graphql';
import PostPreviewTitle from '../posts/post-preview-title';

interface Props {
  brand: BrandPreviewResponse;
}

export default function BrandPreviewHeader({ brand }: Props) {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 md:items-start">
        <PostPreviewTitle title={brand.name} />
      </div>
      {/* BrandMenu */}
    </div>
  );
}
