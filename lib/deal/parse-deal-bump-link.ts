import { Deal } from './deal.types';

export const parseDealBumpLink = ({
  username,
  dealType,
  slug,
}: {
  username: string;
  dealType: Deal;
  slug: string;
}) => `/user/${username}/${dealType}/${slug}/bump`;
