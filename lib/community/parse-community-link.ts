import { CommunityType } from './community.types';

export const parseCommunityLink = ({
  groupSlug,
  communityType,
}: {
  groupSlug?: string | null;
  communityType: CommunityType;
}) => (groupSlug ? `/g/${groupSlug}/${communityType}` : `/${communityType}`);
