import { Post } from 'prisma';
import { client } from '../client';

export type Posts = {
  posts: Post[];
  cursor: string;
  hasNextPage: boolean;
};

export async function getPosts(
  categoryId: string,
  type: string,
  cursor: string,
) {
  const res = await client.get<Posts>(
    `/categories/${categoryId}/posts?type=${type}&cursor=${cursor}`,
  );
  return res.data;
}

export async function getPost(id: string) {
  const res = await client.get<Post>(`/posts/${id}`);
  return res.data;
}
