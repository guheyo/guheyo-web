'use client';

import { useGroup } from '@/hooks/use-group';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import Link from 'next/link';
import React from 'react';

function MoreLinkLayout({
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
      <div className="flex flex-row items-center gap-1">{children}</div>
    </Link>
  );
}

export default MoreLinkLayout;
