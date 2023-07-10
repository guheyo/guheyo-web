import _ from "lodash";
import { client } from "../client";
import { Post } from "prisma";

type Posts = {
  posts: Post[]
  cursor: string
  hasNextPage: boolean
}

export async function getPosts(categoryId: string, type: string, cursor: string) {
  const res = await client.get<Posts>(`/categories/${categoryId}/posts?type=${type}&cursor=${cursor}`);
  return res.data;
}

export async function getPost(id: string) {
  const res = await client.get<Post>(`/posts/${id}`);
  return res.data;
}