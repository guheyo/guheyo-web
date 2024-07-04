'use client';

import { ArticlePreviewResponse } from '@/generated/graphql';
import PostTags from '../posts/post-tags';
import PostPreviewAddons from '../posts/post-preview-addons';
import PostCategory from '../posts/post-category';

interface Props {
  article: ArticlePreviewResponse;
}

export default function ArticlePreviewFooter({ article }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-1 md:gap-2 items-center">
        {article.post.category && (
          <PostCategory category={article.post.category} />
        )}
        <PostTags tags={article.post.tags} />
      </div>
      <PostPreviewAddons postCommentCount={article.post.commentCount} />
    </div>
  );
}
