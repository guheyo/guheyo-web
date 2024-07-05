'use client';

import GroupIcon from '@mui/icons-material/Group';
import HomeLinkLayout from '../home/home-link.layout';

function MemberHomeLink() {
  return (
    <HomeLinkLayout path="member">
      <GroupIcon />
      <div>멤버</div>
    </HomeLinkLayout>
  );
}

export default MemberHomeLink;
