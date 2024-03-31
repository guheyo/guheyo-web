'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import { ReactNode, useContext } from 'react';
import ReportSubmitterNavbar from '@/components/reports/report-submitter-navbar';

interface Props {
  children: ReactNode;
  params: {
    username: string;
  };
}

export default function Layout({ children, params }: Props) {
  const { jwtPayload } = useContext(AuthContext);
  const isPublic = jwtPayload?.username !== params.username;

  return (
    <div>
      <div className="flex flex-col justify-start pb-4">
        <ReportSubmitterNavbar isPublic={isPublic} />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}
