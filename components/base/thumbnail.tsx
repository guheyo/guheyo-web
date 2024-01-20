'use client';

import Image from 'next/image';

export default function Thumbnail({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  return (
    <div className="flex justify-center items-center relative overflow-hidden w-fit h-32 md:h-48 lg:h-52 rounded-md">
      <Image src={url} alt={name} width={1024} height={1024} />
    </div>
  );
}
