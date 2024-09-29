'use client';

import BrandFeed from '@/components/brand/brand-feed';
import BrandHomeFeedLayout from '@/components/brand/brand-home-feed.layout';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <BrandHomeFeedLayout
        postPreviewType="thumbnail"
        showChannels
        showCategories={false}
        showSelectors
        showMoreLink={false}
      >
        <BrandFeed type="thumbnail" />
      </BrandHomeFeedLayout>
    </Suspense>
  );
}
