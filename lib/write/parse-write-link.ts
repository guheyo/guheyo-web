import { parseWriteGroupChannelSlug } from './parse-write-group-channel-slug';

export const parseWriteLink = ({
  groupSlug,
  channelSlug,
}: {
  groupSlug?: string;
  channelSlug: string;
}) => {
  if (channelSlug === 'gb') return `/write/thread?categoryTypes=gb`;
  if (channelSlug === 'community')
    return `/write/thread?categoryTypes=community`;
  return groupSlug
    ? `/write/g/${groupSlug}/${parseWriteGroupChannelSlug({ channelSlug })}`
    : `/write/channel/${channelSlug}`;
};
