export const parseThreadDetailLink = ({ slug }: { slug: string }) =>
  `/thread/${decodeURI(slug)}`;
