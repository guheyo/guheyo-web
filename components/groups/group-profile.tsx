'use client';

import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { ComponentSize } from '@/lib/component/component.types';
import InfoCard from '../info/info-card';

export default function GroupProfile({
  name,
  icon,
  description,
  size,
}: {
  name: string;
  icon?: string | null;
  description?: string | null;
  size: ComponentSize;
}) {
  const parseSize = (imageSize: ComponentSize) => {
    if (imageSize === 'small') {
      return isMobile ? 24 : 24;
    }
    if (imageSize === 'medium') {
      return isMobile ? 30 : 36;
    }
    return isMobile ? 36 : 42;
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 bg-dark-400 rounded-lg text-gray-300">
      <InfoCard
        name={name}
        icon={
          <Image
            src={!icon ? '/guheyo/guheyo-logo.svg' : icon}
            width={parseSize(size)}
            height={parseSize(size)}
            alt={`${name} logo`}
            className="rounded-full"
          />
        }
        about={description}
      />
    </div>
  );
}
