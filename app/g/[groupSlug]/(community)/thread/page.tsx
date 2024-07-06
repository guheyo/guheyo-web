'use client';

import ThreadFeed from '@/components/thread/thread-feed';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { useGroup } from '@/hooks/use-group';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindThreadPreviewsWhereInput = {
    groupId: group.id,
  };
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <ThreadFeed type="listview" defaultWhere={where} defaultOrderBy={orderBy} />
  );
}
