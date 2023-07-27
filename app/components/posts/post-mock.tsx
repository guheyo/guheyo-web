'use client';

import React, { memo } from 'react';
import { Skeleton } from '@mui/material';

interface Props {
  type: string;
}

function PostMock({ type }: Props) {
  // type === 'buy'
  //       ? 'w-48 h-36 md:w-96 md:h-72'
  //       : cols === 1
  //       ? 'w-96 h-72'
  //       : 'w-48 sm:w-72 md:w-96 h-36 md:h-72';
  return (
    <div className={`flex flex-col p-2 bg-subBg w-full`}>
      <div className="flex flex-row items-center justify-start">
        <Skeleton
          animation="wave"
          variant="circular"
          className="w-[36px] h-[36px] mr-2 rounded-full"
        />
        <Skeleton animation="wave" className="w-full h-4 mb-2 " />
      </div>
      <Skeleton
        className="my-2 "
        sx={{ height: 190 }}
        animation="wave"
        variant="rectangular"
      />
      <div className="flex flex-row w-full items-center justify-between px-2">
        <Skeleton animation="wave" className="w-[60%] h-4" />
        <Skeleton animation="wave" className="w-[20%] h-4" />
      </div>
    </div>
  );
}

export default memo(PostMock);
