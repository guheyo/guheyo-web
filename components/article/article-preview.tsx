'use client';

import { ArticlePreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import ArticleListViewPreview from './article-listview-preview';

interface Props {
  type: PostPreviewType;
  article: ArticlePreviewResponse;
  isInGroup: boolean;
}

export default function ArticlePreview({ type, article, isInGroup }: Props) {
  switch (type) {
    case 'listview': {
      return <ArticleListViewPreview article={article} isInGroup={isInGroup} />;
    }
    default: {
      return <div />;
    }
  }
}
