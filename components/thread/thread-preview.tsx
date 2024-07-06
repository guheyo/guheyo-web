'use client';

import { ThreadPreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import ThreadListViewPreview from './thread-listview-preview';

interface Props {
  type: PostPreviewType;
  thread: ThreadPreviewResponse;
  isInGroup: boolean;
}

export default function ThreadPreview({ type, thread, isInGroup }: Props) {
  switch (type) {
    case 'listview': {
      return <ThreadListViewPreview thread={thread} isInGroup={isInGroup} />;
    }
    default: {
      return <div />;
    }
  }
}
