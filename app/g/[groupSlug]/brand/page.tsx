'use client';

import BrandFeed from '@/components/brand/brand-feed';
import BrandHomeFeedLayout from '@/components/brand/brand-home-feed.layout';
import { Suspense } from 'react';

function Page() {
  return (
    <Suspense>
      <BrandHomeFeedLayout
        showCategories={false}
        showSelectors
        showMoreLink={false}
      >
        <BrandFeed />
      </BrandHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
