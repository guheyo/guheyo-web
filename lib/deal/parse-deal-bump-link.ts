import { Deal } from './deal.types';

export const parseDealBumpLink = ({
  dealType,
  dealId,
}: {
  dealType: Deal;
  dealId: string;
}) => `/bump/${dealType}/${dealId}`;
