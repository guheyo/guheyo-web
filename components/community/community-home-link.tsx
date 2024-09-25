'use client';

import ForumIcon from '@mui/icons-material/Forum';
import HomeLinkLayout from '@/components/home/home-link.layout';
import { CommunityChannelType } from '@/lib/community/community.types';

function CommunityHomeLink({
  communityChannelType,
}: {
  communityChannelType: CommunityChannelType;
}) {
  return (
    <HomeLinkLayout path={communityChannelType}>
      <ForumIcon />
      <div>커뮤니티</div>
    </HomeLinkLayout>
  );
}

export default CommunityHomeLink;
