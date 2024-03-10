import { Deal } from './deal.types';

export const parseTempDealFormKey = ({
  userId,
  dealType,
  groupSlug,
  prevDealId,
}: {
  userId: string;
  dealType: Deal;
  groupSlug: string;
  prevDealId?: string;
}) =>
  prevDealId
    ? `${userId}.edit.${dealType}.${groupSlug}.${prevDealId}`
    : `${userId}.write.${dealType}.${groupSlug}`;
