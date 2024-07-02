'use client';

import { ArticlePreviewResponse } from '@/generated/graphql';
import PostTags from '../posts/post-tags';

interface Props {
  article: ArticlePreviewResponse;
}

export default function ArticlePreviewFooter({ article }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-1 md:gap-2 items-center">
        <PostTags tags={article.post.tags} />
      </div>
    </div>
  );
}
