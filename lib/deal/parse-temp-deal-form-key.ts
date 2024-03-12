export const parseTempDealFormKey = ({
  userId,
  groupSlug,
  prevDealId,
}: {
  userId: string;
  groupSlug?: string | null;
  prevDealId?: string;
}) =>
  prevDealId
    ? `${userId}.edit.deal.${prevDealId}`
    : `${userId}.write.deal.${groupSlug}`;
