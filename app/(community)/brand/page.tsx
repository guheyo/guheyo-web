'use client';

import BrandFeed from '@/components/brand/brand-feed';
import CommunityHomeFeedLayout from '@/components/community/community-home-feed.layout';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <CommunityHomeFeedLayout
        communityChannelType="brand"
        showChannels
        showTabs
        showCategories={false}
        showTags
        showSelectors
        showMoreLink={false}
      >
        <BrandFeed />
      </CommunityHomeFeedLayout>
    </Suspense>
  );
}
