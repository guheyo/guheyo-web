export const parseNameFromURL = (url: string) => {
  const re = /\/([^?/]+)(?=\?|$)/;
  const match = re.exec(url);
  if (!match) throw new Error('Invalid url format');
  return match[1];
};
