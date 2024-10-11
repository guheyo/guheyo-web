'use client';

import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import { parseUrlSegments } from '@/lib/group/parse-url-segments';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function HomeLinkLayout({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const pathname = usePathname();
  const { groupSlug, channelSlug } = parseUrlSegments(pathname);

  return (
    <Link
      href={parseChannelLink({
        groupSlug: channelSlug ? undefined : groupSlug,
        channelSlug: path,
      })}
    >
      <div className="flex flex-row gap-2 items-center text-gray-200 text-base md:text-lg font-semibold pt-4 pb-2">
        {children}
      </div>
    </Link>
  );
}

export default HomeLinkLayout;
