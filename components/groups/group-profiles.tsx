'use client';

import { useRef } from 'react';
import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import Link from 'next/link';
import GroupProfile from './group-profile';
import SearchResultCardLayout from '../search/search-result-card.layout';

export default function GroupProfiles({
  keyword,
  generateLink,
}: {
  keyword?: string;
  generateLink?: (slug: string) => string;
}) {
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
    <>
      {groups.map((group) => (
        <Link
          key={group.node.name}
          href={
            generateLink
              ? generateLink(group.node.slug!)
              : `g/${group.node.slug}`
          }
        >
          <SearchResultCardLayout>
            <GroupProfile
              name={group.node.name}
              icon={group.node.icon}
              description={group.node.description}
            />
          </SearchResultCardLayout>
        </Link>
      ))}
      <div ref={ref} />
    </>
  );
}
