export const parseAuctionLink = ({
  groupSlug,
}: {
  groupSlug?: string | null;
}) => (groupSlug ? `/g/${groupSlug}/auction` : '/auction');
