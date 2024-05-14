export const parseUserReviewDetailLink = ({ slug }: { slug: string }) =>
  `/review/${decodeURI(slug)}`;
