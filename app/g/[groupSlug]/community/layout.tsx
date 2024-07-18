'use client';

import CommunityHomeFeedLayout from '@/components/community/community-home-feed.layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <CommunityHomeFeedLayout>{children}</CommunityHomeFeedLayout>;
}

export default Layout;
