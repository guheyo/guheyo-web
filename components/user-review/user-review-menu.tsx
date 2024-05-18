import * as React from 'react';
import { AuthContext } from '../auth/auth.provider';
import PrivateUserReviewMenu from './private-user-review-menu';

export default function UserReviewMenu({
  userReviewId,
  userId,
  privateOnly,
}: {
  userReviewId: string;
  userId: string;
  privateOnly?: boolean;
}) {
  const { jwtPayload } = React.useContext(AuthContext);

  if (jwtPayload?.id === userId) {
    return <PrivateUserReviewMenu userReviewId={userReviewId} />;
  }

  if (privateOnly) return <div />;
  return <div />;
}
