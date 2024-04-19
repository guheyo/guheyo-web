export const parseOfferDetailLink = ({ slug }: { slug: string }) =>
  `/offer/${decodeURI(slug)}`;
