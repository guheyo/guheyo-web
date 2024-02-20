'use client';

import { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import DealStatusSelector from './deal-status-selector';

interface Props {
  children: ReactNode;
}

function FeedHomeLayout({ children }: Props) {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  return (
    <div>
      <div className="flex justify-end pb-2">
        <DealStatusSelector status={status} />
      </div>
      <div className="grid gap-1 grid-cols-1 mx-2 md:mx-0">{children}</div>
    </div>
  );
}

export default FeedHomeLayout;
