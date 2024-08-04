'use client';

import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import HomeLinkLayout from '@/components/home/home-link.layout';

function GbHomeLink() {
  return (
    <HomeLinkLayout path="gb">
      <ShopTwoIcon />
      <div>공동구매</div>
    </HomeLinkLayout>
  );
}

export default GbHomeLink;
