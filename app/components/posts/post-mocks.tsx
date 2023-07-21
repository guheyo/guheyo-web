'use client';

import React, { memo } from 'react';
import PostMock from '@/app/components/posts/post-mock';

interface Props {
  type: string;
}

function PostMocks({ type }: Props) {
  return (
    <>
      {Array.from(Array(18).keys()).map((num) => (
        <PostMock key={num} type={type} />
      ))}
    </>
  );
}

export default memo(PostMocks);
