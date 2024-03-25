export const parseDealStatus = (status: string | null) => {
  if (!status) return undefined;
  if (status === 'all') return undefined;
  return status;
};
