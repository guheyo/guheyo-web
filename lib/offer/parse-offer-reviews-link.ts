export const parseOfferReviewsLink = ({ slug }: { slug: string }) =>
  `/offer/${decodeURI(slug)}/review`;
