'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import ReportHomeLink from './report-home-link';
import ReportSelectors from './report-selectors';
import ReportMoreLink from './report-more-link';
import ReportTypeNavbar from './report-type-navbar';

interface Props {
  children: ReactNode;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function ReportHomeFeedLayout({
  children,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<ReportHomeLink />}
      path="report"
      categories={showCategories && <ReportTypeNavbar />}
      selectors={
        showSelectors && (
          <>
            <div />
            <ReportSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <ReportMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default ReportHomeFeedLayout;
