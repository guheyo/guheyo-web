import ThumbnailFeedLayout from '@/components/deals/thumbnail-feed.layout';
import React from 'react';

function MySwapsLayout({ children }: { children: React.ReactNode }) {
  return <ThumbnailFeedLayout>{children}</ThumbnailFeedLayout>;
}

export default MySwapsLayout;
