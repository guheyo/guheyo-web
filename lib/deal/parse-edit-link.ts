import { Deal } from './deal.types';

export const parseEditLink = ({
  dealType,
  id,
}: {
  dealType: Deal;
  id: string;
}) => `/edit/${dealType}/${id}`;
