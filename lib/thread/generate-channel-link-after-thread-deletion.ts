import { parseChannelLink } from '../channel/parse-channel-link';

export const generateChannelLinkAfterThreadDeletion = ({
  groupSlug,
  channelSlug,
  categoryTypes,
  identifier,
  view,
}: {
  groupSlug?: string | null;
  channelSlug: string;
  categoryTypes?: string[];
  identifier?: string | null;
  view?: string | null;
}) => {
  if (view) {
    return parseChannelLink({
      groupSlug,
      channelSlug,
      identifier,
      view,
    });
  }
  if (identifier) {
    return parseChannelLink({
      groupSlug,
      channelSlug: categoryTypes?.at(0) || '',
    });
  }
  return parseChannelLink({
    groupSlug,
    channelSlug,
  });
};
