'use client';

import { ReactNode } from 'react';
import DealStatusSelector from './deal-status-selector';

interface Props {
  children: ReactNode;
}

function FeedHomeLayout({ children }: Props) {
  return (
    <div>
      <div className="flex justify-end pb-2">
        <DealStatusSelector />
      </div>
      <div className="grid gap-1 grid-cols-1 mx-2 md:mx-0">{children}</div>
    </div>
  );
}

export default FeedHomeLayout;
