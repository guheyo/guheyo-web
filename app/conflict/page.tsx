'use client';

import SocialAccountConflictFeed from '@/components/social-account-conflict/social-account-conflict-feed';
import SocialAccountConflictHomeFeedLayout from '@/components/social-account-conflict/social-account-conflict-home-feed.layout';
import { Suspense } from 'react';

export default function Page() {
  const orderBy = {
    createdAt: 'desc',
  };
  return (
    <Suspense>
      <SocialAccountConflictHomeFeedLayout
        hideGroupProfileSidebarItems
        postPreviewType="listview"
        showChannels
        showCategories={false}
        showSelectors
        showMoreLink={false}
      >
        <SocialAccountConflictFeed defaultWhere={{}} defaultOrderBy={orderBy} />
      </SocialAccountConflictHomeFeedLayout>
    </Suspense>
  );
}
