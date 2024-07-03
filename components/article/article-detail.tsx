'use client';

import { ArticleResponse } from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import ArticleDetailMain from './article-detail-main';

export default function ArticleDetail({
  article,
}: {
  article: ArticleResponse;
}) {
  return (
    <PostDetail
      images={article.post.images}
      postDetailMain={<ArticleDetailMain article={article} />}
    />
  );
}
