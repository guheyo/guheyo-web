'use client';

import { useRef } from 'react';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import SidebarItem from '../base/sidebar-item';

export default function GroupProfileSidebarItems({
  onClick,
}: {
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteGroupProfiles({
    ref,
    take: 1,
  });

  const handleClick = () => {
    onClick();
  };

  if (loading) return <div />;
  if (!data?.findGroupProfiles) return <div />;

  const groups = data.findGroupProfiles.edges;
  return (
    <>
      {groups.map((group) => (
        <SidebarItem
          key={group.node.name}
          href={`/g/${group.node.slug}`}
          icon={
            <Image
              src={!group.node.icon ? '/star/star.svg' : group.node.icon}
              width={isMobile ? 20 : 24}
              height={isMobile ? 20 : 24}
              alt={`${group.node.name} logo`}
              className="rounded-lg"
            />
          }
          text={group.node.name}
          onClick={handleClick}
        />
      ))}
      <div ref={ref} />
    </>
  );
}
