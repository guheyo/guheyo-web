import { CommunityType } from './community.types';

export const parseGroupCommunityLink = ({
  groupSlug,
  communityType,
}: {
  groupSlug: string;
  communityType: CommunityType;
}) => `/g/${groupSlug}/${communityType}`;
