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
      <div className="grid gap-6 grid-cols-1">{children}</div>
    </div>
  );
}

export default Layout;
