import { Deal } from './deal.types';

export const parseGroupMarketLink = ({
  groupSlug,
  dealType,
}: {
  groupSlug: string;
  dealType: Deal;
}) => `/g/${groupSlug}/market/${dealType}`;
