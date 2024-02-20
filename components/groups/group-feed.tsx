'use client';

import { useFindGroupPreviewsQuery } from '@/generated/graphql';
import GroupPreview from './group-preview';

export default function GroupFeed() {
  const { loading, data } = useFindGroupPreviewsQuery();
  if (loading) return <div />;
  if (!data?.findGroupPreviews) return <div />;
  const groups = data.findGroupPreviews;

  return (
    <div className="grid grid-rows gap-4 md:gap-12">
      {groups.map((group) => (
        <GroupPreview group={group} key={group.slug} />
      ))}
    </div>
  );
}
