import * as React from 'react';
import { ThreadResponse } from '@/generated/graphql';
import { AuthContext } from '../auth/auth.provider';
import PublicReportMenu from '../reports/public-report-menu';
import PrivateThreadMenu from './private-thread-menu';

export default function ThreadMenu({
  thread,
  privateOnly,
}: {
  thread: ThreadResponse;
  privateOnly?: boolean;
}) {
  const { jwtPayload } = React.useContext(AuthContext);

  if (jwtPayload?.id === thread.post.user.id) {
    return <PrivateThreadMenu thread={thread} />;
  }

  if (privateOnly) return <div />;

  return <PublicReportMenu type="post" refId={thread.post.id} />;
}
