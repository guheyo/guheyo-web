// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createQueryKeys,
  mergeQueryKeys,
} from '@lukemorales/query-key-factory';

export const guildKeys = createQueryKeys('guilds', {
  all: null,
  categories: (guildName: string) => ({
    queryKey: [guildName, 'categories'],
  }),
});

export const postKeys = createQueryKeys('posts', {
  list: (categoryId: string, type: string) => ({
    queryKey: ['posts', categoryId, type],
  }),
  detail: (postId: string) => ({
    queryKey: ['post', postId],
  }),
});

export const queryKeys = mergeQueryKeys(guildKeys, postKeys);
