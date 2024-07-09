export const parseWriteGroupChannelSlug = ({
  channelSlug,
}: {
  channelSlug: string;
}) => (['sell', 'buy', 'swap'].includes(channelSlug) ? 'offer' : channelSlug);
