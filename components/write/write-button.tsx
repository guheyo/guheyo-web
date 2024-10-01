'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { extractGroupAndChannel } from '@/lib/group/extract-group-and-channel';
import {
  ALL_CHANNELS,
  NON_WRITABLE_CHANNELS,
} from '@/lib/write/write.constants';
import { ComponentSize } from '@/lib/component/component.types';
import WriteChannelSelector from './write-channel-selector';
import WriteLink from './write-link';

export default function WriteButton({ size }: { size: ComponentSize }) {
  const pathname = usePathname();
  const { groupSlug, channelSlug } = extractGroupAndChannel(pathname);

  if (!channelSlug || !ALL_CHANNELS.includes(channelSlug)) return null;

  return NON_WRITABLE_CHANNELS.includes(channelSlug) ? (
    <WriteChannelSelector groupSlug={groupSlug} size={size} />
  ) : (
    <WriteLink groupSlug={groupSlug} channelSlug={channelSlug} size={size} />
  );
}
