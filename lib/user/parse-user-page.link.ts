import { DealType } from '../deal/deal.types';

export const parseUserHomeLink = ({ username }: { username: string }) =>
  `/user/${username}`;

export const parseDealDetailLink = ({
  username,
  dealType,
  slug,
}: {
  username: string;
  dealType: DealType;
  slug: string;
}) => `/user/${username}/${dealType}/${slug}`;

export const parseUserReportFeedLink = ({ username }: { username: string }) =>
  `/user/${username}/report/received`;
