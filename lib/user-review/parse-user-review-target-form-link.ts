import { UserReviewTargetType } from './user-review.constants';

export const parseUserReviewTargetFormLink = ({
  userId,
  targetType,
  targetId,
}: {
  userId: string;
  targetType: UserReviewTargetType;
  targetId: string;
}) => `/write/review/user/${userId}/${targetType}/${targetId}`;
