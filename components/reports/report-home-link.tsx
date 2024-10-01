'use client';

import FlagIcon from '@mui/icons-material/Flag';
import HomeLinkLayout from '../home/home-link.layout';

function ReportHomeLink() {
  return (
    <HomeLinkLayout path="report">
      <FlagIcon />
      <div>신고</div>
    </HomeLinkLayout>
  );
}

export default ReportHomeLink;
