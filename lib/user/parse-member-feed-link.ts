export const parseMemberFeedtLink = ({
  groupSlug,
}: {
  groupSlug?: string | null;
}) => (groupSlug ? `/g/${groupSlug}/member` : '/member');
