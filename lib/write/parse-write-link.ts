export const parseWriteLink = ({
  groupSlug,
  channelSlug,
}: {
  groupSlug?: string;
  channelSlug: string;
}) =>
  groupSlug ? `/write/g/${groupSlug}/${channelSlug}` : `/write/${channelSlug}`;
