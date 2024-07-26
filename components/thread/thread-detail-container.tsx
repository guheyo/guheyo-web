'use client';

import ThreadDetail from '@/components/thread/thread-detail';
import CommentFeed from '@/components/comments/comment-feed';
import PostDetailAddons from '@/components/posts/post-detail-addons';
import {
  FindCommentsOrderByInput,
  FindCommentsWhereInput,
  ThreadResponse,
} from '@/generated/graphql';
import CommentSelector from '@/components/comments/comment-selector';
import { useSearchParams } from 'next/navigation';

export default function ThreadDetailContainer({
  thread,
}: {
  thread: ThreadResponse;
}) {
  const searchParams = useSearchParams();
  const view = searchParams.get('view') || 'newest';

  const where: FindCommentsWhereInput = {
    postId: thread.post.id,
    userId: view === 'writerComment' ? thread.post.user.id : undefined,
  };
  const orderBy: FindCommentsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <div className="flex flex-col gap-4">
      <ThreadDetail thread={thread} />
      <div className="pt-14 px-4 md:px-0 flex flex-row justify-between items-center text-base md:text-lg text-gray-300 font-bold">
        <PostDetailAddons commentCount={thread.post.commentCount || 0} />
        <CommentSelector />
      </div>
      <div className="px-4 md:px-0">
        <CommentFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </div>
    </div>
  );
}
