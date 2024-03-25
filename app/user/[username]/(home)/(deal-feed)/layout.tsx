'use client';

import MyFeedHomeLayout from '@/components/deals/my-feed-home.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function MyDealsLayout({ children }: Props) {
  return <MyFeedHomeLayout>{children}</MyFeedHomeLayout>;
}

export default MyDealsLayout;
