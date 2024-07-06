'use client';

import ReportTypeNavbar from '@/components/reports/report-type-navbar';
import { ReactNode, Suspense } from 'react';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';
import ReportHomeLink from './report-home-link';
import CommunityTypePathUpdater from '../community/community-type-path-updater';

interface Props {
  children: ReactNode;
}

function HomeReportFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="pt-0 pb-2 px-3 md:px-1 w-fit">
        <ReportHomeLink />
      </div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-0 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/report`}
        />
      </div>
      <div className="px-2.5 md:px-1">
        <Suspense>
          <ReportTypeNavbar />
        </Suspense>
      </div>
      <div className="pb-2">
        <Suspense>
          <CommunityTypePathUpdater />
        </Suspense>
      </div>
      {children}
    </div>
  );
}

export default HomeReportFeedLayout;
