import TextFeedLayout from '@/components/deals/text-feed.layout';
import React from 'react';

function MyDemandsLayout({ children }: { children: React.ReactNode }) {
  return <TextFeedLayout>{children}</TextFeedLayout>;
}

export default MyDemandsLayout;
