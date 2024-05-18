export const parseSlugFromURL = (url: string) => {
  const regex = /([-\w가-힣]*)-\w+(?:\?.*)?$/;
  const match = decodeURI(url).match(regex);
  return match ? match[1] : null;
};
