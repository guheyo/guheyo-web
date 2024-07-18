'use client';

import ReportHomeFeedLayout from '@/components/reports/report-home-feed.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <ReportHomeFeedLayout>{children}</ReportHomeFeedLayout>;
}

export default Layout;
