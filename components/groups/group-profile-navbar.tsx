'use client';

import { MouseEventHandler } from 'react';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import { GroupStatus } from '@/generated/graphql';
import GroupProfileNavbarIconItem from './group-profile-navbar-icon-item';

export default function GroupProfileNavbar({
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
  const { setRef, loading, data } = useInfiniteGroupProfiles({
    where: {
      status: GroupStatus.Major,
    },
    orderBy: {
      position: 'asc',
    },
    take: 12,
  });

  if (loading) return <div />;
  if (!data?.findGroupProfiles) return <div />;

  const groups = data.findGroupProfiles.edges;
  return (
    <>
      {groups.map((group) => (
        <GroupProfileNavbarIconItem
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
