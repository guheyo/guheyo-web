'use client';

import { Image } from 'prisma';
import NextImage from 'next/image';

export default function Thumbnail({ image }: { image: Image }) {
  return (
    <div className="flex justify-center items-center relative overflow-hidden w-fit h-32 md:h-48 lg:h-52 rounded-md">
      <NextImage src={image.url} alt={image.name} width={1024} height={1024} />
    </div>
  );
}
