'use client';

import FeedHomeLayout from '@/components/deals/feed-home.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function MyDealsLayout({ children }: Props) {
  return <FeedHomeLayout>{children}</FeedHomeLayout>;
}

export default MyDealsLayout;
