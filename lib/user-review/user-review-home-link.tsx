'use client';

import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import HomeLinkLayout from '@/components/home/home-link.layout';

function UserReviewHomeLink() {
  return (
    <HomeLinkLayout path="review">
      <StickyNote2Icon />
      <div>거래 후기 • 신고</div>
    </HomeLinkLayout>
  );
}

export default UserReviewHomeLink;
