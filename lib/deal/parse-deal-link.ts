import { Deal } from './deal.types';

export const parseDealLink = ({
  action,
  dealType,
  dealId,
}: {
  action: 'edit' | 'bump' | 'report',
  dealType: Deal;
  dealId: string;
}) => `/${action}/${dealType}/${dealId}`;
