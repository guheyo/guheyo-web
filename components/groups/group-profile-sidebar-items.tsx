'use client';

import { MouseEventHandler } from 'react';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import { GroupStatus } from '@/generated/graphql';
import GroupProfileSidebarItem from './group-profile-sidebar-item';

export default function GroupProfileSidebarItems({
  currentGroupId,
  status,
  paddingX,
  paddingY,
  onClick = () => {},
  pathFormatter,
}: {
  currentGroupId?: string;
  status: GroupStatus;
  paddingX: number;
  paddingY: number;
  onClick?: MouseEventHandler;
  pathFormatter: (slug: string) => string;
}) {
  const { setRef, loading, data } = useInfiniteGroupProfiles({
    where: {
      status,
    },
    orderBy: {
      position: 'asc',
    },
    take: 4,
  });

  if (loading) return <div />;
  if (!data?.findGroupProfiles) return <div />;

  const groups = data.findGroupProfiles.edges;
  return (
    <>
      {groups.map((group) => (
        <GroupProfileSidebarItem
          key={group.node.id}
          name={group.node.name}
          slug={group.node.slug!}
          icon={group.node.icon}
          isActive={group.node.id === currentGroupId}
          paddingX={paddingX}
          paddingY={paddingY}
          onClick={onClick}
          pathFormatter={pathFormatter}
        />
      ))}
      <div ref={setRef} />
    </>
  );
}
