export const extractGroupAndChannel = (pathname: string) => {
  // Split the pathname into parts
  const parts = pathname.split('/');

  // Check if the URL has the correct format
  if (parts.length >= 4 && parts[1] === 'g') {
    const groupSlug = parts[2];
    const channelSlug = parts[3];

    return { groupSlug, channelSlug };
  }

  // if writable channels
  if (/^\/(auction|sell|buy|swap|thread)(?:\?.*)?$/.test(pathname)) {
    return { groupSlug: null, channelSlug: parts[1] };
  }

  return {
    groupSlug: null,
    channelSlug: null,
  };
};
