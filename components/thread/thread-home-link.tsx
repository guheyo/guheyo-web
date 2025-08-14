'use client';

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HomeLinkLayout from '@/components/home/home-link.layout';

function ThreadHomeLink() {
  return (
    <HomeLinkLayout path="thread">
      <ChatBubbleIcon />
      <div>게시판</div>
    </HomeLinkLayout>
  );
}

export default ThreadHomeLink;
