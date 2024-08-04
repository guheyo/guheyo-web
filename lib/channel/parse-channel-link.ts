export const parseChannelLink = ({
  channelName,
  groupSlug,
  category,
}: {
  channelName: string;
  groupSlug?: string | null;
  category?: string | null;
}) => {
  if (groupSlug && category) return `/g/${groupSlug}/${channelName}?category=${category}`;
  if (groupSlug) return `/g/${groupSlug}/${channelName}`;
  return `/${channelName}`;
};
