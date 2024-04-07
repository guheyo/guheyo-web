'use client';

import ReportFeedLayout from '@/components/reports/report-feed.layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ReportFeedLayout>{children}</ReportFeedLayout>;
}
