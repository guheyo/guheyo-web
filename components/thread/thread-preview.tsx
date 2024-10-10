'use client';

import { ThreadPreviewResponse } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import ThreadListViewPreview from './thread-listview-preview';

interface Props {
  type: PostPreviewType;
  thread: ThreadPreviewResponse;
  displayGroup: boolean;
}

export default function ThreadPreview({ type, thread, displayGroup }: Props) {
  switch (type) {
    case 'listview': {
      return (
        <ThreadListViewPreview thread={thread} displayGroup={displayGroup} />
      );
    }
    default: {
      return <div />;
    }
  }
}
