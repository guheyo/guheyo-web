'use client';

import { ReactNode } from 'react';
import { PRIVATE_USER_DEAL_STATUS_OPTIONS } from '@/lib/deal/deal.constants';
import DealCategoriesNavbar from './deal-categories-navbar';
import DealStatusNavbar from '../users/deal-status-navbar';

interface Props {
  children: ReactNode;
}

function PrivateUserDealFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-start pb-4">
        <DealCategoriesNavbar />
        <DealStatusNavbar options={PRIVATE_USER_DEAL_STATUS_OPTIONS} />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default PrivateUserDealFeedLayout;
