export const parseBrandHomeLink = ({ slug }: { slug: string }) =>
  `/brand/${decodeURI(slug)}`;
