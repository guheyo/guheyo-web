export const parseUserReviewFormLink = ({
  userId,
  offerId,
}: {
  userId?: string;
  offerId?: string;
}) => {
  if (userId) return `/write/review/user/${userId}`;
  if (offerId) return `/write/review/offer/${offerId}`;
  return '/';
};
