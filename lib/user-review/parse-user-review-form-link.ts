import { UserReviewTargetType } from './user-review.constants';

export const parseUserReviewFormLink = ({
  userId,
  targetType,
  targetId,
}: {
  userId?: string;
  targetType?: UserReviewTargetType;
  targetId?: string;
}) => {
  if (userId) return `/write/review/user/${userId}`;
  if (targetType === 'offer') return `/write/review/offer/${targetId}`;
  if (targetType === 'auction') return `/write/review/auction/${targetId}`;
  return '/';
};
