'use client';

import { ReactNode } from 'react';
import DealCategoriesNavbar from './deal-categories-navbar';

interface Props {
  children: ReactNode;
}

function PublicUserDealFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-start pb-4">
        <DealCategoriesNavbar />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default PublicUserDealFeedLayout;
