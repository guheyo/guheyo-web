'use client';

import MemberHomeFeedLayout from '@/components/member/member-home-feed.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="mx-2 md:mx-0">
      <MemberHomeFeedLayout>{children}</MemberHomeFeedLayout>
    </div>
  );
}

export default Layout;
