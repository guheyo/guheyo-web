'use client';

import { ReactNode } from 'react';
import { UserImageResponse } from '@/generated/graphql';
import PostDetailMainLayout from './post-detail-main.layout';
import ImageSlider from '../base/image-slider';

export default function PostDetail({
  images,
  postDetailMain,
}: {
  images?: UserImageResponse[];
  postDetailMain: ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-6 text-gray-300 rounded-none md:rounded-lg">
      {images?.length ? (
        <ImageSlider images={images} sizes="h-[360px] md:h-[500px]" />
      ) : (
        <div className="pt-0" />
      )}
      <PostDetailMainLayout>{postDetailMain}</PostDetailMainLayout>
    </div>
  );
}
