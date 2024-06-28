'use client';

import { MouseEventHandler, useRef } from 'react';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import SidebarItem from '../base/sidebar-item';
import Avatar from '../avatar/avatar';

export default function GroupProfileSidebarItems({
  currentGroupId,
  paddingX,
  paddingY,
  onClick = () => {},
  pathFormatter,
}: {
  currentGroupId?: string;
  paddingX: number;
  paddingY: number;
  onClick?: MouseEventHandler;
  pathFormatter: (slug: string) => string;
}) {
  const device = useDeviceDetect();
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteGroupProfiles({
    ref,
    take: 3,
  });

  if (loading) return <div />;
  if (!data?.findGroupProfiles) return <div />;

  const groups = data.findGroupProfiles.edges;
  return (
    <>
      {groups.map((group) => (
        <SidebarItem
          key={group.node.name}
          href={pathFormatter(group.node.slug!)}
          icon={
            <Avatar
              name={group.node.name}
              src={
                !group.node.icon ? '/guheyo/guheyo-logo.svg' : group.node.icon
              }
              fontSize={device === 'mobile' ? 'text-xs' : 'text-sm'}
            />
          }
          text={group.node.name}
          isActive={currentGroupId === group.node.id}
          paddingX={paddingX}
          paddingY={paddingY}
          onClick={onClick}
        />
      ))}
      <div ref={ref} />
    </>
  );
}
