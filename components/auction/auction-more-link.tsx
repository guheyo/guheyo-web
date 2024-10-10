'use client';

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { isMobile } from 'react-device-detect';
import MoreLinkLayout from '../more/more-link.layout';

export default function AuctionMoreLink() {
  return (
    <MoreLinkLayout path="auction">
      <span className="flex flex-row items-center gap-1">
        <PlayCircleOutlineOutlinedIcon
          fontSize={isMobile ? 'small' : 'medium'}
        />
        경매
      </span>
    </MoreLinkLayout>
  );
}
