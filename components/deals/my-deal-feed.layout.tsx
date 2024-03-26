'use client';

import { ReactNode } from 'react';
import DealCategoriesNavbar from './deal-categories-navbar';
import MyDealStatusNavbar from '../users/my-deal-status-navbar';

interface Props {
  children: ReactNode;
}

function MyDealFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-start px-2 md:px-0 pb-8">
        <DealCategoriesNavbar />
        <MyDealStatusNavbar />
      </div>
      <div className="grid gap-1 grid-cols-1 mx-2 md:mx-0">{children}</div>
    </div>
  );
}

export default MyDealFeedLayout;
