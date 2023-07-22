import { Post } from 'prisma';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../client';

export type Posts = {
  posts: Post[];
  cursor: string;
  hasNextPage: boolean;
};

export const useInfinitePosts = (categoryId: string, type: string) =>
  useInfiniteQuery(['posts', categoryId, type], {
    queryFn: async ({ pageParam = '' }) => {
      const res = await client.get<Posts>(
        `/categories/${categoryId}/posts?type=${type}&cursor=${pageParam}`,
      );
      return res.data;
    },
    getNextPageParam: (lastPage) => lastPage.cursor,
    enabled: !!categoryId,
  });

export const usePost = (id: string) =>
  useQuery(['posts', id], () => client.get(`/posts/${id}`), {
    select: (data: AxiosResponse<Post>) => data.data,
  });
