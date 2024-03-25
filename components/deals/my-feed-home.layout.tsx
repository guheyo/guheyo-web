'use client';

import { ReactNode } from 'react';
import MyUserDealStatusNavbar from '../users/my-user-deal-status-navbar';

interface Props {
  children: ReactNode;
}

function MyFeedHomeLayout({ children }: Props) {
  return (
    <div>
      <div className="flex justify-start pb-2">
        <MyUserDealStatusNavbar />
      </div>
      <div className="grid gap-1 grid-cols-1 mx-2 md:mx-0">{children}</div>
    </div>
  );
}

export default MyFeedHomeLayout;
