'use client';

import Image from 'next/image';

export default function Thumbnail({
  url,
  name,
  thumbnailSize,
}: {
  url: string;
  name: string;
  thumbnailSize: 'small' | 'large';
}) {
  if (thumbnailSize === 'large') {
    return (
      <div className="flex justify-center items-center relative overflow-hidden w-fit h-24 md:h-48 lg:h-52 rounded-md">
        <Image src={url} alt={name} width={320} height={320} />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center relative overflow-hidden w-fit h-16 rounded-md">
      <Image src={url} alt={name} width={72} height={64} />
    </div>
  );
}
