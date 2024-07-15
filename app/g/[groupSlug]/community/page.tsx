'use client';

import ThreadAndReviewFeed from '@/components/community/thread-and-review-feed';
import { useGroup } from '@/hooks/use-group';
import { SortOrder } from '@/types/sort.types';

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
    <ThreadAndReviewFeed
      type="listview"
      defaultWhere={where}
      defaultOrderBy={orderBy}
    />
  );
}
