import { ThreadPreviewResponse } from '@/generated/graphql';
import { cache } from './cache';

export function updateCacheWithNewThread(newThread: ThreadPreviewResponse) {
  cache.modify({
    fields: {
      findThreadPreviews(existingThreadPreviews = {}) {
        return {
          ...existingThreadPreviews,
          edges: [
            { node: newThread, cursor: newThread.id },
            ...existingThreadPreviews.edges,
          ],
        };
      },
    },
  });
}
