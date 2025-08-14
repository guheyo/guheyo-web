import { THREAD_CHANNEL_CATEGORY_TYPE } from '../thread/thread.constants';
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
    const categoryType = THREAD_CHANNEL_CATEGORY_TYPE[channelSlug];

    if (categoryType) {
      return `/write/thread?categoryTypes=${categoryType}`;
    }

    return groupSlug
      ? `/write/g/${groupSlug}/${parseWriteGroupChannelSlug({ channelSlug })}`
      : `/write/channel/${channelSlug}`;
  }
  return `/write/${channelSlug}`;
};
