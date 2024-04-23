'use client';

import GroupJoinButton from './gorup-join-button';
import GroupHeaderItem from './group-header-item';

export default function GroupJoinSection({
  name,
  icon,
  slug,
}: {
  name: string;
  icon?: string | null;
  slug: string;
}) {
  return (
    <div className="flex flex-row gap-8 items-center text-star-500">
      <GroupHeaderItem name={name} icon={icon} />
      <GroupJoinButton slug={slug} />
    </div>
  );
}
