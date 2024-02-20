'use client';

import DealStatusSelector from '@/components/deals/deal-status-selector';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function MyDealsLayout({ children }: Props) {
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

export default MyDealsLayout;
