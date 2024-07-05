'use client';

import ArticleFeed from '@/components/article/article-feed';
import {
  FindArticlePreviewsOrderByInput,
  FindArticlePreviewsWhereInput,
} from '@/generated/graphql';
import { useGroup } from '@/hooks/use-group';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindArticlePreviewsWhereInput = {
    groupId: group.id,
  };
  const orderBy: FindArticlePreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <ArticleFeed
      type="listview"
      defaultWhere={where}
      defaultOrderBy={orderBy}
    />
  );
}
