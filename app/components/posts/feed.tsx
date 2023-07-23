'use client';

import { useInfiniteScroll } from '@/app/hooks/use-infinite-scroll';
import { Posts, useInfinitePosts } from '@/app/lib/api/posts';
import { useAppSelector } from '@/redux/hooks';
import { Post } from 'prisma';
import React, { useRef } from 'react';
import PostMock from './post-mock';
import PostPreview from './post-preview';

function PostMocks({ type }: { type: string }) {
  return (
    <>
      {Array.from(Array(18).keys()).map((num) => (
        <PostMock key={num} type={type} />
      ))}
    </>
  );
}

function PostPreviews({
  posts,
  type,
  cols,
}: {
  posts: Posts[] | undefined;
  type: string;
  cols: number;
}) {
  if (!posts) return null;
  return (
    <>
      {posts.map((group) => (
        <React.Fragment key={group.cursor}>
          {group.posts.map((post: Post) => (
            <div className="col-span-1" key={post.id}>
              <PostPreview type={type} post={post} cols={cols} />
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

export default function Feed() {
  const categoryId = useAppSelector(
    (state) => state.categoriesSlice.categoryId,
  );
  const type = useAppSelector((state) => state.postsSlice.type);
  const cols = useAppSelector((state) => state.postsSlice.cols);

  const { data, hasNextPage, fetchNextPage, isError, isLoading } =
    useInfinitePosts(categoryId, type);

  const ref = useRef<HTMLDivElement>(null);
  useInfiniteScroll(ref, fetchNextPage, hasNextPage);

  if (isLoading) {
    if (type === 'buy')
      return (
        <div className="flex justify-center">
          <div className="grid gap-2 max-w-lg md:gap-2 lg:gap-2 grid-cols-1 items-start">
            <PostMocks type={type} />
          </div>
          <div ref={ref} />
        </div>
      );
    return (
      <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
        <PostMocks type={type} />
      </div>
    );
  }
  if (isError) return <p>Error ...</p>;

  if (type === 'buy')
    return (
      <div className="flex justify-center">
        <div className="grid gap-2 max-w-lg md:gap-2 lg:gap-2 grid-cols-1 items-start">
          <PostPreviews posts={data?.pages} type={type} cols={cols} />
        </div>
        <div ref={ref} />
      </div>
    );
  return (
    <>
      <div
        className={`grid gap-4 md:gap-8 lg:gap-12 ${
          cols === 1 ? 'grid-cols-1' : 'grid-cols-2'
        } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start`}
      >
        <PostPreviews posts={data?.pages} type={type} cols={cols} />
      </div>
      <div ref={ref} />
    </>
  );
}
