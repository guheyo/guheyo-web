'use client';

import { ThreadResponse } from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import ThreadDetailMain from './thread-detail-main';

export default function ThreadDetail({
  thread,
}: {
  thread: ThreadResponse;
}) {
  return (
    <PostDetail
      images={thread.post.images}
      postDetailMain={<ThreadDetailMain thread={thread} />}
    />
  );
}
