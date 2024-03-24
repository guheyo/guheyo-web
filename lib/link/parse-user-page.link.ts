import { Deal } from '../deal/deal.types';

export const parseUserHomeLink = ({ username }: { username: string }) =>
  `/user/${username}/home`;

export const parseUserDealDetailLink = ({
  username,
  deal,
  slug,
}: {
  username: string;
  deal: Deal;
  slug: string;
}) => `/user/${username}/${deal}/${slug}`;
