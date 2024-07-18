'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function PublicUserAuctionFeedLayout({ children }: Props) {
  return (
    <>
      <div className="pb-4" />
      {children}
    </>
  );
}

export default PublicUserAuctionFeedLayout;
