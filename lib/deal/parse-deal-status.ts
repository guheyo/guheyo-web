export const parseDealStatus = ({ status }: { status: string | null }) => {
  if (status === 'all') return undefined;
  return status || undefined;
};
