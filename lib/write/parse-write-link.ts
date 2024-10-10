import { THREAD_CHANNELS } from '../thread/thread.constants';
import { parseWriteGroupChannelSlug } from './parse-write-group-channel-slug';
import { WRITABLE_CHANNELS } from './write.constants';

export const parseWriteLink = ({
  groupSlug,
  channelSlug,
}: {
  groupSlug?: string;
  channelSlug: string;
}) => {
  if (WRITABLE_CHANNELS.includes(channelSlug)) {
    if (THREAD_CHANNELS.includes(channelSlug))
      return `/write/thread?categoryTypes=${channelSlug}`;
    return groupSlug
      ? `/write/g/${groupSlug}/${parseWriteGroupChannelSlug({ channelSlug })}`
      : `/write/channel/${channelSlug}`;
  }
  return `/write/${channelSlug}`;
};
