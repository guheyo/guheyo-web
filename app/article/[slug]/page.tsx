'use client';

import ArticleDetail from '@/components/article/article-detail';
import { useFindArticleQuery } from '@/generated/graphql';

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

  return (
    <div className="flex flex-col gap-4">
      <ArticleDetail article={article} />
    </div>
  );
}

export default Page;
