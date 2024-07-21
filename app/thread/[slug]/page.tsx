'use client';

import ThreadDetail from '@/components/thread/thread-detail';
import CommentFeed from '@/components/comments/comment-feed';
import PostDetailAddons from '@/components/posts/post-detail-addons';
import {
  FindCommentsOrderByInput,
  FindCommentsWhereInput,
  useFindThreadQuery,
} from '@/generated/graphql';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { loading, data } = useFindThreadQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findThread) return <div />;

  const thread = data.findThread;

  const where: FindCommentsWhereInput = {
    postId: thread.post.id,
  };
  const orderBy: FindCommentsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <div className="flex flex-col gap-4">
      <ThreadDetail thread={thread} />
      <div className="pt-14 px-4 md:px-0 text-base md:text-lg text-gray-300 font-bold">
        <PostDetailAddons commentCount={thread.post.commentCount || 0} />
      </div>
      <div className="px-4 md:px-0">
        <CommentFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </div>
    </div>
  );
}

export default Page;
