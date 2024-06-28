'use client';

import Image from 'next/image';
import { isMobile } from 'react-device-detect';

export default function GroupHeaderItem({
  name,
  icon,
}: {
  name: string;
  icon?: string | null;
}) {
  return (
    <div className="flex flex-row gap-4 items-center break-all">
      <Image
        src={!icon ? '/guheyo/guheyo-logo.svg' : icon}
        width={isMobile ? 32 : 40}
        height={isMobile ? 32 : 40}
        alt={`${name} logo`}
        className="rounded-lg"
      />
      <div className="text-gray-200 text-base md:text-lg font-semibold">
        {name}
      </div>
    </div>
  );
}
