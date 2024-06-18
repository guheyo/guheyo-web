export const parseOfferStatus = ({ status }: { status?: string }) => {
  if (status === 'all') return undefined;
  return status || undefined;
};
