'use client';

import InfoIcon from '@mui/icons-material/Info';
import HomeLinkLayout from '@/components/home/home-link.layout';

function InfoHomeLink() {
  return (
    <HomeLinkLayout path="info">
      <InfoIcon />
      <div>정보</div>
    </HomeLinkLayout>
  );
}

export default InfoHomeLink;
