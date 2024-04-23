export const parseUserReviewFormLink = ({
  username,
  offerId,
}: {
  username?: string;
  offerId?: string;
}) => {
  if (username) return `/write/review/user/${username}`;
  if (offerId) return `/write/review/offer/${offerId}`;
  return '/';
};
