'use client';

import { useGroup } from '@/hooks/use-group';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

export default function GroupHeader({ slug }: { slug: string }) {
  const { loading, group } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        src={!group.icon ? '/star/star.svg' : group.icon}
        width={isMobile ? 36 : 48}
        height={isMobile ? 36 : 48}
        alt={`${group.name} logo`}
        className="rounded-lg"
      />
      <div className="text-star-500 text-base md:text-lg font-bold">
        {group.name}
      </div>
    </div>
  );
}
