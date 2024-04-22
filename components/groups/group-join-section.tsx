'use client';

import GroupProfile from './group-profile';
import GroupJoinButton from './gorup-join-button';

export default function GroupJoinSection({
  name,
  icon,
  description,
  slug,
}: {
  name: string;
  icon?: string | null;
  description?: string | null;
  slug: string;
}) {
  return (
    <div className="flex flex-row gap-8 items-center text-star-500">
      <GroupProfile name={`g/${name}`} icon={icon} description={description} />
      <GroupJoinButton slug={slug} />
    </div>
  );
}
