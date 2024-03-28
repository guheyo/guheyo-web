'use client';

import { ReactNode } from 'react';
import DealSelectors from '../selectors/deal-selectors';

interface Props {
  children: ReactNode;
}

function FeedHomeLayout({ children }: Props) {
  return (
    <div>
      <div className="flex justify-end pb-2">
        <DealSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default FeedHomeLayout;
