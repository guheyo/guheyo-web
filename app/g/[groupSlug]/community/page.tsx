'use client';

import CommunityHomeFeedLayout from '@/components/community/community-home-feed.layout';
import ThreadAndReviewFeed from '@/components/community/thread-and-review-feed';
import { useGroup } from '@/hooks/use-group';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where = {
    groupId: group.id,
  };
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <Suspense>
      <CommunityHomeFeedLayout showCategories showTags showMoreLink={false}>
        <ThreadAndReviewFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
        />
      </CommunityHomeFeedLayout>
    </Suspense>
  );
}
