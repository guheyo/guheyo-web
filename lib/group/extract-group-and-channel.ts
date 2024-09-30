import { ALL_CHANNELS } from '../write/write.constants';

export const extractGroupAndChannel = (pathname: string) => {
  // Split the pathname into parts
  const parts = pathname.split('/');

  // Check if the URL has the correct format
  if (parts.length >= 4 && parts[1] === 'g') {
    const groupSlug = parts[2];
    const channelSlug = parts[3];

    return { groupSlug, channelSlug };
  }

  if (new RegExp(`^/(${ALL_CHANNELS.join('|')})(?:\\?.*)?$`).test(pathname)) {
    return { groupSlug: null, channelSlug: parts[1] };
  }

  return {
    groupSlug: null,
    channelSlug: null,
  };
};
