'use client';

import Image from 'next/image';
import { isMobile } from 'react-device-detect';

export default function GroupInfo({
  name,
  icon,
}: {
  name: string;
  icon?: string | null;
}) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div>
        <Image
          src={!icon ? '/star/star.svg' : icon}
          width={isMobile ? 48 : 56}
          height={isMobile ? 48 : 56}
          alt={`${name} logo`}
          className="rounded-lg"
        />
      </div>
      <div className="text-star-500 text-base md:text-lg font-bold">{`g/${name}`}</div>
    </div>
  );
}
