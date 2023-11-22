'use client';

import { Post } from 'prisma';
import React, { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useColSize } from '@/store/use-col-size';
import { Posts, useInfinitePosts } from '@/lib/api/posts';
import { PostMocks } from './post-mock';
import PostPreview from './post-preview';

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
            <div className="col-span-1 p-1" key={post.id}>
              <PostPreview type={type} post={post} cols={cols} />
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

interface Props {
  categoryId: string;
}
export default function Feed({ categoryId }: Props) {
  const searchParams = useSearchParams();
  const colSize = useColSize((state) => state.colSize);

  const type = searchParams.get('type') ?? 'sell';

  const { data, hasNextPage, fetchNextPage, isError, isLoading } =
    useInfinitePosts(categoryId, type);

  const ref = useRef<HTMLDivElement>(null);
  useInfiniteScroll(ref, fetchNextPage, hasNextPage);

  if (isLoading) {
    return (
      <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
        <PostMocks type={type} />
      </div>
    );
  }
  if (isError) return <p>Error ...</p>;

  return (
    <>
      <div
        className={`grid gap-4 md:gap-8 lg:gap-12 ${
          colSize === 1 ? 'grid-cols-1' : 'grid-cols-2'
        } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start`}
      >
        <PostPreviews posts={data?.pages} type={type} cols={colSize} />
      </div>
      <div ref={ref} />
    </>
  );
}
