'use client';

import { ReactNode } from 'react';
import ThreadHomeLink from './thread-home-link';
import HomeFeedLayout from '../home/home-feed.layout';

interface Props {
  children: ReactNode;
}

function HomeThreadFeedLayout({ children }: Props) {
  return (
    <HomeFeedLayout homeLink={<ThreadHomeLink />} path="thread">
      {children}
    </HomeFeedLayout>
  );
}

export default HomeThreadFeedLayout;
