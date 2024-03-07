export const parseTempDealFormKey = ({
  username,
  groupSlug,
}: {
  username: string;
  groupSlug: string;
}) => `${username}.${groupSlug}.deal-form`;
