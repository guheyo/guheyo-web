'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function PublicUserOfferFeedLayout({ children }: Props) {
  return (
    <>
      <div className="pb-4" />
      {children}
    </>
  );
}

export default PublicUserOfferFeedLayout;
