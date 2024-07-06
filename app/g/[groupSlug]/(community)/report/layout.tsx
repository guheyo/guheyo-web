'use client';

import CommunityTypePathUpdater from '@/components/community/community-type-path-updater';
import ReportTypeNavbar from '@/components/reports/report-type-navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <div className="px-2.5 md:px-1">
        <ReportTypeNavbar />
      </div>
      <div className="pb-2">
        <CommunityTypePathUpdater />
      </div>
      {children}
    </div>
  );
}

export default Layout;
