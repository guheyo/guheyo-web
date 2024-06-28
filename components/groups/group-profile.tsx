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
          src={!icon ? '/guheyo/guheyo-logo.svg' : icon}
          width={isMobile ? 30 : 36}
          height={isMobile ? 30 : 36}
          alt={`${name} logo`}
          className="rounded-lg"
        />
      }
      about={description}
    />
  );
}
