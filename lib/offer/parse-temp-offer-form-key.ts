export const parseTempOfferFormKey = ({
  userId,
  groupSlug,
  offerId,
}: {
  userId: string;
  groupSlug?: string | null;
  offerId?: string;
}) =>
  offerId
    ? `${userId}.edit.offer.${offerId}`
    : `${userId}.write.offer.${groupSlug}`;
