'use client';

import ReportTypeNavbar from '@/components/reports/report-type-navbar';
import { ReactNode } from 'react';
import ReportHomeLink from './report-home-link';
import HomeFeedLayout from '../home/home-feed.layout';

interface Props {
  children: ReactNode;
}

function HomeReportFeedLayout({ children }: Props) {
  return (
    <HomeFeedLayout
      homeLink={<ReportHomeLink />}
      path="report"
      selectors={<ReportTypeNavbar />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default HomeReportFeedLayout;
