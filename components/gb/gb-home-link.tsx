'use client';

import ShopIcon from '@mui/icons-material/Shop';
import HomeLinkLayout from '@/components/home/home-link.layout';

function GbHomeLink() {
  return (
    <HomeLinkLayout path="gb">
      <ShopIcon />
      <div>공동구매</div>
    </HomeLinkLayout>
  );
}

export default GbHomeLink;
