'use client';

import { memo } from 'react';

interface Props {
  type: string;
}

const PostMock = ({ type }: Props) => {
  return (
    <div className="flex">
      <div
        className={`bg-gray-200 ${
          type === 'buy' ? 'w-[32rem] h-24' : 'w-96 h-72'
        }`}
      />
    </div>
  );
};

export default memo(PostMock);
