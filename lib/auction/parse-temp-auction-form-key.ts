export const parseTempAuctionFormKey = ({
  userId,
  groupSlug,
  auctionId,
}: {
  userId: string;
  groupSlug?: string | null;
  auctionId?: string;
}) =>
  auctionId
    ? `${userId}.edit.auction.${auctionId}`
    : `${userId}.write.auction.${groupSlug}`;
