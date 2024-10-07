import { ThreadResponse } from '@/generated/graphql';
import { cache } from './cache';

export function updateCacheWithNewThread(newThread: ThreadResponse) {
  cache.modify({
    fields: {
      findThreadPreviews(existingThreadPreviews = {}) {
        return {
          ...existingThreadPreviews,
          edges: [
            {
              node: {
                ...newThread,
                __typename: 'ThreadPreviewResponse',
                post: {
                  ...newThread.post,
                  __typename: 'PostPreviewWithAuthorResponse',
                },
              },
              cursor: newThread.id,
            },
            ...existingThreadPreviews.edges,
          ],
        };
      },
    },
  });
}
