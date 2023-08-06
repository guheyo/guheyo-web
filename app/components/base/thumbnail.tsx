'use client';

import { Image } from 'prisma';
import NextImage from 'next/image';

export default function Thumbnail({
  image,
  sizes,
}: {
  image: Image;
  sizes: string;
}) {
  return (
    <div
      className={`${sizes} flex overflow-hidden justify-center items-center`}
      style={{
        position: 'relative',
      }}
    >
      <NextImage
        src={image.url}
        alt={image.name}
        fill
        style={{ objectFit: 'cover' }}
        sizes="50vw"
      />
    </div>
  );
}
