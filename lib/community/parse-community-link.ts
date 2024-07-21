export const parseCommunityLink = ({
  groupSlug,
  category,
}: {
  groupSlug?: string | null;
  category?: string | null;
}) => {
  if (groupSlug && category)
    return `/g/${groupSlug}/community?category=${category}`;
  if (groupSlug) return `/g/${groupSlug}/community`;
  return '/community';
};
