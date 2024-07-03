'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import {
  FindArticlePreviewsOrderByInput,
  FindArticlePreviewsWhereInput,
} from '@/generated/graphql';
import { useInfiniteArticleFeed } from '@/hooks/use-infinite-article-feed';
import { PostPreviewType } from '@/lib/post/post.types';
import { useSearchParams } from 'next/navigation';
import { findCategory } from '@/lib/group/find-category';
import ArticlePreview from './article-preview';

function ArticleFeed({
  defaultWhere,
  defaultOrderBy,
  keyword,
  type,
}: {
  defaultWhere: FindArticlePreviewsWhereInput;
  defaultOrderBy?: FindArticlePreviewsOrderByInput;
  keyword?: string;
  type: PostPreviewType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  const { loading, data } = useInfiniteArticleFeed({
    ref,
    where: {
      groupId: group?.id,
      userId: defaultWhere.userId,
      categoryId: category?.id,
    },
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'desc',
    },
    keyword,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findArticlePreviews) return <div />;

  const { edges } = data.findArticlePreviews;

  return (
    <>
      {edges.map((edge) => (
        <ArticlePreview
          key={edge.node.id}
          type={type}
          article={edge.node}
          isInGroup={!!group}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default ArticleFeed;
