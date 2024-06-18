'use client';

import { parseGroupHomeLink } from '@/lib/group/parse-group-home-link';
import Link from 'next/link';

export default function GroupNameLink({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  return (
    <Link
      href={parseGroupHomeLink({ slug })}
      className="flex flex-row gap-2 items-center break-all"
    >
      <div className="text-gray-400 text-[10px] md:text-xs font-semibold">
        {name}
      </div>
    </Link>
  );
}
