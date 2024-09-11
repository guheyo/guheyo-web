export const parseBrandDetailLink = ({ slug }: { slug: string }) =>
  `/brands/${decodeURI(slug)}`;
