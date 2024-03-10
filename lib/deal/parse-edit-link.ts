import { Deal } from './deal.types';

export const parseEditLink = ({
  groupSlug,
  dealType,
  id,
}: {
  groupSlug: string;
  dealType: Deal;
  id: string;
}) => `/write/g/${groupSlug}/market/${dealType}/${id}`;
