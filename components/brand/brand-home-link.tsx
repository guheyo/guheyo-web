'use client';

import LoyaltyIcon from '@mui/icons-material/Loyalty';
import HomeLinkLayout from '../home/home-link.layout';

function BrandHomeLink() {
  return (
    <HomeLinkLayout path="brand">
      <LoyaltyIcon />
      <div>브랜드</div>
    </HomeLinkLayout>
  );
}

export default BrandHomeLink;
