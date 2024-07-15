'use client';

import ForumIcon from '@mui/icons-material/Forum';
import HomeLinkLayout from '@/components/home/home-link.layout';

function CommunityHomeLink() {
  return (
    <HomeLinkLayout path="community">
      <ForumIcon />
      <div>커뮤니티</div>
    </HomeLinkLayout>
  );
}

export default CommunityHomeLink;
