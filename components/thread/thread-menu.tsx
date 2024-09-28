import * as React from 'react';
import { AuthContext } from '../auth/auth.provider';
import PublicReportMenu from '../reports/public-report-menu';
import PrivateThreadMenu from './private-thread-menu';

export default function ThreadMenu({
  threadId,
  postId,
  userId,
  privateOnly,
}: {
  threadId: string;
  postId: string;
  userId: string;
  privateOnly?: boolean;
}) {
  const { jwtPayload } = React.useContext(AuthContext);

  if (jwtPayload?.id === userId) {
    return <PrivateThreadMenu threadId={threadId} />;
  }

  if (privateOnly) return <div />;

  return <PublicReportMenu type="post" refId={postId} />;
}
