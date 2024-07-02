'use client';

import Link from 'next/link';
import { ArticlePreviewResponse } from '@/generated/graphql';
import { parseArticleDetailLink } from '@/lib/article/parse-article-detail-link';
import { parseGroupArticleLink } from '@/lib/article/parse-group-article-link';
import GroupNameLink from '../groups/group-name-link';
import ArticlePreviewHeader from './article-preview-header';
import ArticlePreviewFooter from './article-preview-footer';
import ArticlePreviewContent from './article-preview-content';

interface Props {
  article: ArticlePreviewResponse;
  isInGroup: boolean;
}

export default function ArticleListViewPreview({ article, isInGroup }: Props) {
  const { group } = article.post;
  return (
    <div className="relative overflow-hidden bg-dark-400 px-4 rounded-lg">
      <Link
        href={parseArticleDetailLink({
          slug: article.post.slug!,
        })}
        className="w-full text-start"
      >
        <div className="grid grid-cols-1 gap-2 pt-4 pb-4">
          <div className="flex flex-col gap-1">
            {!isInGroup && (
              <div className="w-fit">
                <GroupNameLink
                  name={group.name}
                  href={parseGroupArticleLink({ groupSlug: group.slug! })}
                />
              </div>
            )}
            <ArticlePreviewHeader article={article} />
            <ArticlePreviewContent article={article} />
            <ArticlePreviewFooter article={article} />
          </div>
        </div>
      </Link>
    </div>
  );
}
