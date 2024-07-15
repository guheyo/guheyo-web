'use client';

import HomeMemberFeedLayout from '@/components/member/home-member-feed.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="mx-2 md:mx-0">
      <HomeMemberFeedLayout>{children}</HomeMemberFeedLayout>
    </div>
  );
}

export default Layout;
