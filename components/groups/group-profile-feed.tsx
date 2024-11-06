'use client';

import { useInfiniteGroupProfiles } from '@/hooks/use-infinite-group-profiles';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ComponentSize } from '@/lib/component/component.types';
import { PostPreviewType } from '@/lib/post/post.types';
import {
  FindGroupProfilesOrderByInput,
  FindGroupProfilesWhereInput,
} from '@/generated/graphql';
import GroupProfile from './group-profile';

export default function GroupProfileFeed({
  type,
  defaultWhere,
  defaultOrderBy,
  defaultDistinct,
  generateLink,
  size,
}: {
  type: PostPreviewType;
  defaultWhere: FindGroupProfilesWhereInput;
  defaultOrderBy: FindGroupProfilesOrderByInput;
  defaultDistinct: boolean;
  generateLink?: (value: string) => string;
  size?: ComponentSize;
}) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { setRef, loading, data } = useInfiniteGroupProfiles({
    where: {
      ...defaultWhere,
    },
    orderBy: {
      ...defaultOrderBy,
      position: defaultOrderBy.position || 'asc',
    },
    keyword,
    target,
    take: 12,
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
              : `/g/${group.node.slug}`
          }
        >
          <GroupProfile
            name={group.node.name}
            icon={group.node.icon}
            description={group.node.description}
            size={size || 'medium'}
          />
        </Link>
      ))}
      <div ref={setRef} />
    </>
  );
}
