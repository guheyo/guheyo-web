'use client';

import React, { useCallback, useRef } from 'react';
import { Post } from 'prisma';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useAppSelector } from '@/redux/hooks';
import { getPosts, Posts } from '@/app/lib/api/posts';
import { useInfiniteScroll } from '@/app/hooks/use-infinite-scroll';
import PostPreview from './post-preview';
import PostMock from './post-mock';

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

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    ['posts', categoryId, type],
    {
      queryFn: async ({ pageParam = '' }) =>
        getPosts(categoryId ?? '', type, pageParam),
      getNextPageParam: (lastPage, allPages) => lastPage.cursor,
    },
  );

  const ref = useRef<HTMLDivElement>(null);
  const fetchNext = useCallback(() => {
    if (!hasNextPage) return;
    fetchNextPage();
  }, [hasNextPage, fetchNextPage]);

  useInfiniteScroll(ref, fetchNext);

  if (status === 'loading') {
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
  if (status === 'error') return <p>Error ...</p>;

  if (type === 'buy')
    return (
      <div className="flex justify-center">
        <div className="grid gap-2 max-w-lg md:gap-2 lg:gap-2 grid-cols-1 items-start">
          <PostPreviews posts={data.pages} type={type} cols={cols} />
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
        <PostPreviews posts={data.pages} type={type} cols={cols} />
      </div>
      <div ref={ref} />
    </>
  );
}
