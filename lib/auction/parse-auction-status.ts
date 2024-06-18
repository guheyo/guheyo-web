export const parseAuctionStatus = ({ status }: { status?: string }) => {
  if (status === 'all') return undefined;
  return status || undefined;
};
