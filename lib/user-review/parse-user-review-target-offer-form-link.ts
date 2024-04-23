export const parseUserReviewTargetOfferFormLink = ({
  username,
  offerId,
}: {
  username: string;
  offerId: string;
}) => `/write/review/user/${username}/offer/${offerId}`;
