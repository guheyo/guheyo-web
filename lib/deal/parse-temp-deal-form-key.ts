export const parseTempDealFormKey = ({
  userId,
  groupSlug,
}: {
  userId: string;
  groupSlug: string;
}) => `${userId}.${groupSlug}.deal-form`;
