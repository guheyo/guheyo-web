export const parseChannelLink = ({
  groupSlug,
  channelSlug,
  category,
  identifier,
  view,
}: {
  groupSlug?: string | null;
  channelSlug: string;
  category?: string | null;
  identifier?: string | null;
  view?: string | null;
}) => {
  let url = groupSlug ? `/g/${groupSlug}/${channelSlug}` : `/${channelSlug}`;

  if (identifier) {
    url += `/${identifier}`;
  }

  if (view) {
    url += `/${view}`;
  }

  if (category) {
    url += `?category=${category}`;
  }

  return url;
};
