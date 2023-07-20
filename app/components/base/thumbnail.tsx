'use client';

import { Image } from 'prisma';
import NextImage from 'next/image';
import { memo } from 'react';

interface Props {
  image: Image;
  sizes: string;
  width: number;
  height: number;
}

const Thumbnail = ({ image, sizes, width, height }: Props) => {
  return (
    <div
      className={`${sizes} flex overflow-hidden justify-center items-center`}
      style={{
        position: 'relative',
        objectFit: 'cover',
      }}
    >
      <NextImage
        src={image.url}
        alt={image.name}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
};

export default memo(Thumbnail);
