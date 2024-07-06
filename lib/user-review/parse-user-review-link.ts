export const parseUserReviewLink = ({
  groupSlug,
}: {
  groupSlug?: string | null;
}) => (groupSlug ? `/g/${groupSlug}/review` : '/review');
