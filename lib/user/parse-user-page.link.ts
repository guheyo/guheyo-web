export const parseUserHomeLink = ({ username }: { username: string }) =>
  `/user/${username}`;

export const parseUserReportFeedLink = ({ username }: { username: string }) =>
  `/user/${username}/report/received`;
