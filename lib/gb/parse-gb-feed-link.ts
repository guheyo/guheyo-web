export const parseGbFeedtLink = ({
  groupSlug,
}: {
  groupSlug?: string | null;
}) => (groupSlug ? `/g/${groupSlug}/gb` : '/gb');
