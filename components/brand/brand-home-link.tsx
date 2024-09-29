'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeLinkLayout from '../home/home-link.layout';

function BrandHomeLink() {
  return (
    <HomeLinkLayout path="brand">
      <FavoriteIcon />
      <div>브랜드</div>
    </HomeLinkLayout>
  );
}

export default BrandHomeLink;
