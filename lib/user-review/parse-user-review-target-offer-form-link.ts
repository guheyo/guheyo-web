export const parseUserReviewTargetOfferFormLink = ({
  userId,
  offerId,
}: {
  userId: string;
  offerId: string;
}) => `/write/review/user/${userId}/offer/${offerId}`;
