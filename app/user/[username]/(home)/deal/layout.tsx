'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import PrivateUserDealFeedLayout from '@/components/deals/private-user-deal-feed.layout';
import PublicUserDealFeedLayout from '@/components/deals/public-user-deal-feed.layout';
import { ReactNode, useContext } from 'react';

interface Props {
  children: ReactNode;
  params: {
    username: string;
  };
}

function Layout({ children, params }: Props) {
  const { user } = useContext(AuthContext);

  if (user?.username !== params.username)
    return <PublicUserDealFeedLayout>{children}</PublicUserDealFeedLayout>;
  return <PrivateUserDealFeedLayout>{children}</PrivateUserDealFeedLayout>;
}

export default Layout;
