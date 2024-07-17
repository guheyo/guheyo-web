'use client';

import GavelIcon from '@mui/icons-material/Gavel';
import HomeLinkLayout from '../home/home-link.layout';

function AuctionHomeLink() {
  return (
    <HomeLinkLayout path="auction">
      <GavelIcon />
      <div>경매</div>
    </HomeLinkLayout>
  )
}

export default AuctionHomeLink;
