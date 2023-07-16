'use client';

import { Image } from 'prisma';
import NextImage from 'next/image';

export default function Thumbnail({
  image,
  sizes,
  width,
  height,
}: {
  image: Image;
  sizes: string;
  width: number;
  height: number;
}) {
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
}
