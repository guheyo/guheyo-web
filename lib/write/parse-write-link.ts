import { parseWriteGroupChannelSlug } from './parse-write-group-channel-slug';

export const parseWriteLink = ({
  groupSlug,
  channelSlug,
}: {
  groupSlug?: string;
  channelSlug: string;
}) =>
  groupSlug
    ? `/write/g/${groupSlug}/${parseWriteGroupChannelSlug({ channelSlug })}`
    : `/write/channel/${channelSlug}`;
