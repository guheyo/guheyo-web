export const parseProductHomeLink = ({ slug }: { slug: string }) =>
  `/product/${decodeURI(slug)}`;
