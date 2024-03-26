'use client';

import MyDealFeedLayout from '@/components/deals/my-deal-feed.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <MyDealFeedLayout>{children}</MyDealFeedLayout>;
}

export default Layout;
