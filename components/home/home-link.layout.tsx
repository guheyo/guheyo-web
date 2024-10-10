'use client';

import { useGroup } from '@/hooks/use-group';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import Link from 'next/link';
import React from 'react';

function HomeLinkLayout({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const { group } = useGroup();

  return (
    <Link
      href={parseChannelLink({ groupSlug: group?.slug, channelSlug: path })}
    >
      <div className="flex flex-row gap-2 items-center text-gray-200 text-base md:text-lg font-semibold pt-4 pb-2">
        {children}
      </div>
    </Link>
  );
}

export default HomeLinkLayout;
