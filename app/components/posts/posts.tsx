'use client';

import React, { useCallback, useRef } from 'react';
import { Post } from 'prisma';
import { useAppSelector } from '@/redux/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '@/app/lib/api/posts';
import { useInfiniteScroll } from '@/app/hooks/useInfiniteScroll';
import PostPreviewCard from './post-preview-card';
import MockCard from './mock-card';

export default function Posts() {
  const categoryId = useAppSelector((state) => state.categoriesSlice.categoryId);
  const type = useAppSelector((state) => state.postsSlice.type);
  const cols = useAppSelector((state) => state.postsSlice.cols);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    status
  } = useInfiniteQuery(['posts', categoryId, type], {
    queryFn: async ({ pageParam = '' }) => getPosts(categoryId ?? '', type, pageParam),
    getNextPageParam: (lastPage, allPages) => lastPage.cursor,
  });

  const ref = useRef<HTMLDivElement>(null);
  const fetchNext = useCallback(() => {
    if (!hasNextPage) return
    fetchNextPage()
  }, [hasNextPage, fetchNextPage]);

  useInfiniteScroll(ref, fetchNext);

  function PostPreviewCards() {
    if (!data) return null;
    return (
      <>
        {
          data.pages.map((group) => (
            <React.Fragment key={group.cursor}>
              {group.posts.map((post: Post) => (
                <div className='col-span-1' key={post.id}>
                  <PostPreviewCard type={type} post={post} cols={cols} />
                </div>
              ))}
            </React.Fragment>
          ))
        }
      </>
    );
  }

  function MockCards() {
    return (
      <>
        {
          [...Array(18)].map((v, i) => (
            <MockCard key={i} type={type} />
          ))
        }
      </>
    );
  }

  if (status === 'loading') {
    if (type === 'buy') return (
      <div className='flex justify-center'>
        <div className="grid gap-2 max-w-lg md:gap-2 lg:gap-2 grid-cols-1 items-start">
          <MockCards />
        </div>
        <div ref={ref} />
      </div>
    );
    return (
      <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
        <MockCards />
      </div>
    );
  }
  if (status === 'error') return (
    <p>Error ...</p>
  );

  if (type === 'buy') return (
    <div className='flex justify-center'>
      <div className="grid gap-2 max-w-lg md:gap-2 lg:gap-2 grid-cols-1 items-start">
        <PostPreviewCards />
      </div>
      <div ref={ref} />
    </div>
  );
  return (
    <>
      <div className={`grid gap-4 md:gap-8 lg:gap-12 ${cols === 1 ? 'grid-cols-1' : 'grid-cols-2'} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start`}>
        <PostPreviewCards />
      </div>
      <div ref={ref} />
    </>
  );
}
