'use client';

import ForumIcon from '@mui/icons-material/Forum';
import HomeLinkLayout from '@/components/home/home-link.layout';

function ThreadHomeLink() {
  return (
    <HomeLinkLayout path="thread">
      <ForumIcon />
      <div>게시판</div>
    </HomeLinkLayout>
  );
}

export default ThreadHomeLink;
