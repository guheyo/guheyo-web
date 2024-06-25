import { UserReviewTargetType } from './user-review.constants';

export const parseUserReviewTargetFormLink = ({
  userId,
  type,
  targetId,
}: {
  userId: string;
  type: UserReviewTargetType;
  targetId: string;
}) => `/write/review/user/${userId}/${type}/${targetId}`;
