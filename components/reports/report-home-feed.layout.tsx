'use client';

import ReportTypeNavbar from '@/components/reports/report-type-navbar';
import { ReactNode } from 'react';
import ReportHomeLink from './report-home-link';
import HomeFeedLayout from '../home/home-feed.layout';
import ReportStatausSelector from './report-status-selector';

interface Props {
  children: ReactNode;
  showSelectors: boolean;
}

function ReportHomeFeedLayout({ children, showSelectors }: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<ReportHomeLink />}
      path="report"
      categories={<ReportTypeNavbar />}
      selectors={
        showSelectors && (
          <>
            <div />
            <ReportStatausSelector />
          </>
        )
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default ReportHomeFeedLayout;
