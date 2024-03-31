import { DealType } from './deal.types';

export const parseGroupMarketLink = ({
  groupSlug,
  dealType,
}: {
  groupSlug: string;
  dealType: DealType;
}) => `/g/${groupSlug}/market/${dealType}`;
