'use client';

import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import HomeLinkLayout from '../home/home-link.layout';

function ReportHomeLink() {
  return (
    <HomeLinkLayout path="report">
      <StickyNote2Icon />
      <div>거래 후기 • 신고</div>
    </HomeLinkLayout>
  );
}

export default ReportHomeLink;
