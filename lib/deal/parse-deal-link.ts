import { DealType } from './deal.types';

export const parseDealLink = ({
  action,
  dealType,
  dealId,
}: {
  action: 'edit' | 'bump' | 'report';
  dealType: DealType;
  dealId: string;
}) => `/${action}/${dealType}/${dealId}`;
