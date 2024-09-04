export const parseReportStatus = ({ status }: { status?: string }) => {
  if (status === 'all') return undefined;
  return status || undefined;
};
