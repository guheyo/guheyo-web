export const extractGroupAndChannel = (pathname: string) => {
  // Split the pathname into parts
  const parts = pathname.split('/');

  // Check if the URL has the correct format
  if (parts.length >= 4 && parts[1] === 'g') {
    const groupSlug = parts[2];
    let channelSlug = parts[3];

    if (['sell', 'buy', 'swap'].includes(channelSlug)) {
      channelSlug = 'offer';
    }

    return { groupSlug, channelSlug };
  }

  // auction
  if (/^\/auction(?:\?.*)?$/.test(pathname)) {
    return { groupSlug: null, channelSlug: 'auction' };
  }

  return {
    groupSlug: null,
    channelSlug: null,
  };
};
