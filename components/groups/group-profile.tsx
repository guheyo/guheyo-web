'use client';

import Link from 'next/link';
import GroupInfo from './group-info';
import GroupJoinButton from './gorup-join-button';

export default function GroupProfile({
  name,
  slug,
  icon,
}: {
  name: string;
  slug: string;
  icon?: string | null;
}) {
  return (
    <div className="flex flex-row gap-2 justify-between p-4 md:p-4 items-center">
      <div>
        <Link href={`g/${slug}`}>
          <GroupInfo name={name} icon={icon} />
        </Link>
      </div>
      <GroupJoinButton slug={slug} />
    </div>
  );
}
