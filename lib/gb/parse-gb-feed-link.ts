export const parseGbFeedtLink = ({
  groupSlug,
  category,
}: {
  groupSlug?: string | null;
  category?: string | null;
}) => {
  if (groupSlug && category) return `/g/${groupSlug}/gb?category=${category}`;
  if (groupSlug) return `/g/${groupSlug}/gb`;
  return '/gb';
};
