'use client';

import GbHomeFeedLayout from '@/components/gb/gb-home-feed.layout';
import ThreadFeed from '@/components/thread/thread-feed';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { useGroup } from '@/hooks/use-group';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindThreadPreviewsWhereInput = {
    groupId: group.id,
    categoryType: 'gb',
  };
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <Suspense>
      <GbHomeFeedLayout
        showCategories
        showTags
        showSelectors
        showMoreLink={false}
      >
        <ThreadFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
        />
      </GbHomeFeedLayout>
    </Suspense>
  );
}
