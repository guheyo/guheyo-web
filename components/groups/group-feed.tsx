'use client';

import { GroupStatus, useFindGroupPreviewsQuery } from '@/generated/graphql';
import GroupPreview from './group-preview';

export default function GroupFeed({ keyword }: { keyword?: string }) {
  const { loading, data } = useFindGroupPreviewsQuery({
    variables: {
      where: {
        status: GroupStatus.Major,
      },
      orderBy: {
        position: 'asc',
      },
      take: 10,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });
  if (loading) return <div />;
  if (!data?.findGroupPreviews) return <div />;
  const groups = data.findGroupPreviews.edges;

  return (
    <div className="grid grid-rows gap-4 md:gap-12">
      {groups.map((group) => (
        <GroupPreview group={group.node} key={group.node.slug} />
      ))}
    </div>
  );
}
