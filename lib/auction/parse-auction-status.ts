export const parseAuctionStatus = ({ status }: { status: string | null }) => {
  if (status === 'all') return undefined;
  return status || undefined;
};
