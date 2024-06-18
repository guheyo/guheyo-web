'use client';

import Link from 'next/link';

export default function GroupNameLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Link href={href} className="flex flex-row gap-2 items-center break-all">
      <div className="text-gray-400 text-[10px] md:text-xs font-semibold">
        {name}
      </div>
    </Link>
  );
}
