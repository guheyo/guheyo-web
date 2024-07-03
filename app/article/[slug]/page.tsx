'use client';

import ArticleDetail from '@/components/article/article-detail';
import CommentFeed from '@/components/comments/comment-feed';
import PostDetailAddons from '@/components/posts/post-detail-addons';
import { useFindArticleQuery } from '@/generated/graphql';
import {
  FindCommentsOrderByArgs,
  FindCommentsWhereArgs,
} from '@/interfaces/comment.interfaces';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { loading, data } = useFindArticleQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findArticle) return <div />;

  const article = data.findArticle;

  const where: FindCommentsWhereArgs = {
    postId: article.post.id,
  };
  const orderBy: FindCommentsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <div className="flex flex-col gap-4">
      <ArticleDetail article={article} />
      <div className="pt-14 px-4 md:px-0 text-base md:text-lg text-gray-300 font-bold">
        <PostDetailAddons commentCount={article.post.commentCount || 0} />
      </div>
      <div className="px-4 md:px-0">
        <CommentFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </div>
    </div>
  );
}

export default Page;
