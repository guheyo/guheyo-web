'use client';

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { isMobile } from 'react-device-detect';
import MoreLinkLayout from '../more/more-link.layout';

export default function ThreadMoreLink() {
  return (
    <MoreLinkLayout path="thread">
      <span className="flex flex-row items-center gap-1">
        <PlayCircleOutlineOutlinedIcon
          fontSize={isMobile ? 'small' : 'medium'}
        />
        게시판
      </span>
    </MoreLinkLayout>
  );
}
