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
      <div className="flex flex-col justify-start">
        <DealCategoriesNavbar />
        <MyDealStatusNavbar />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default MyDealFeedLayout;
