'use client';

import { ReactNode } from 'react';
import OfferSelectors from '../selectors/offer-selectors';

interface Props {
  children: ReactNode;
}

function FeedHomeLayout({ children }: Props) {
  return (
    <div>
      <div className="flex justify-end pb-2">
        <OfferSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default FeedHomeLayout;
