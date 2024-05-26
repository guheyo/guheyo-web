'use client';

import { ReactNode } from 'react';
import { UserImageResponse } from '@/generated/graphql';
import ImageSlider from '../base/image-slider';

export default function PostDetail({
  images,
  postDetailMain,
}: {
  images?: UserImageResponse[];
  postDetailMain: ReactNode;
}) {
  return (
    <>
      <div className="pb-4">
        {!!images?.length && (
          <ImageSlider images={images} sizes="h-[360px] md:h-[500px]" />
        )}
      </div>
      {postDetailMain}
    </>
  );
}
