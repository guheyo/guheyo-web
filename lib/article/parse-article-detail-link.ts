export const parseArticleDetailLink = ({ slug }: { slug: string }) =>
  `/article/${decodeURI(slug)}`;
