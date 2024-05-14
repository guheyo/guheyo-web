'use client';

import ReportTypeNavbar from '@/components/reports/report-type-navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <ReportTypeNavbar />
      {children}
    </div>
  );
}

export default Layout;
