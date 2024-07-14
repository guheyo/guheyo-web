export const parseReportFeedtLink = ({
  groupSlug,
}: {
  groupSlug?: string | null;
}) => (groupSlug ? `/g/${groupSlug}/report` : '/report');
