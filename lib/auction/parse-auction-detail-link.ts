export const parseAuctionDetailLink = ({ slug }: { slug: string }) =>
  `/auction/${decodeURI(slug)}`;
