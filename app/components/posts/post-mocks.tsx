'use client';

import React from 'react';
import PostMock from '@/app/components/posts/post-mock';

interface Props {
  type: string;
}

function PostMocks({ type }: Props) {
  return (
    <>
      {Array.from(Array(18).keys()).map((num) => (
        <div className="col-span-1 bg-subBg text-highlightText" key={num}>
          <PostMock key={num} type={type} />
        </div>
      ))}
    </>
  );
}

export default PostMocks;
