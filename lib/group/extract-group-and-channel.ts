export const extractGroupAndChannel = (pathname: string) => {
  // Split the pathname into parts
  const parts = pathname.split('/');

  // Check if the URL has the correct format
  if (parts.length >= 4 && parts[1] === 'g') {
    const groupName = parts[2];
    let channelName = parts[3];

    if (['sell', 'buy', 'swap'].includes(channelName)) {
      channelName = 'offer';
    }

    return { groupName, channelName };
  }
  return {
    groupName: null,
    channelName: null,
  };
};
