'use client';

import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import InfoCard from '../info/info-card';

export default function GroupProfile({
  name,
  icon,
  description,
}: {
  name: string;
  icon?: string | null;
  description?: string | null;
}) {
  return (
    <InfoCard
      name={name}
      icon={
        <Image
          src={!icon ? '/star/star.svg' : icon}
          width={isMobile ? 36 : 48}
          height={isMobile ? 36 : 48}
          alt={`${name} logo`}
          className="rounded-lg"
        />
      }
      about={description}
    />
  );
}
