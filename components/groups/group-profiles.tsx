'use client';

import { useRef } from 'react';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import GroupProfile from './group-profile';

export default function GroupProfiles({ keyword }: { keyword?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteGroupProfiles({
    ref,
    keyword,
    take: 1,
  });
  if (loading) return <div />;
  if (!data?.findGroupProfiles) return <div />;

  const groups = data.findGroupProfiles.edges;
  return (
    <div className="grid gap-x-0 md:gap-x-4 gap-y-1 lg:gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.node.name} className="rounded-lg bg-dark-400">
          <GroupProfile
            name={group.node.name}
            slug={group.node.slug!}
            icon={group.node.icon}
          />
        </div>
      ))}
      <div ref={ref} />
    </div>
  );
}
