'use client';

import React, { memo } from 'react';

interface Props {
  type: string;
}

function PostMocks({ type }: Props) {
  return (
    <>
      {Array.from(Array(18).keys()).map((num) => (
        <div className="flex" key={num}>
          <div
            className={`bg-gray-200 ${
              type === 'buy' ? 'w-[32rem] h-24' : 'w-96 h-72'
            }`}
          />
        </div>
      ))}
    </>
  );
}

export default memo(PostMocks);
