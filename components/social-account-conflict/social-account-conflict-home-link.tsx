'use client';

import InfoIcon from '@mui/icons-material/Info';
import HomeLinkLayout from '../home/home-link.layout';

function SocialAccountConflictHomeLink() {
  return (
    <HomeLinkLayout path="conflict">
      <InfoIcon />
      <div>소셜 로그인 인증 충돌</div>
    </HomeLinkLayout>
  );
}

export default SocialAccountConflictHomeLink;
