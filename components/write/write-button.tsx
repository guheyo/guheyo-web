'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { parseUrlSegments } from '@/lib/group/parse-url-segments';
import { WRITABLE_CHANNELS } from '@/lib/write/write.constants';
import { ComponentSize } from '@/lib/component/component.types';
import WriteChannelSelector from './write-channel-selector';
import WriteLink from './write-link';

export default function WriteButton({ size }: { size: ComponentSize }) {
  const pathname = usePathname();
  const { groupSlug, channelSlug } = parseUrlSegments(pathname);

  if (!channelSlug || !WRITABLE_CHANNELS.includes(channelSlug))
    return <WriteChannelSelector groupSlug={groupSlug} size={size} />;

  return (
    <WriteLink groupSlug={groupSlug} channelSlug={channelSlug} size={size} />
  );
}
