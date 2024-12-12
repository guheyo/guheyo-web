'use client';

import PrivateUserAuctionFeedLayout from '@/components/auction/private-user-auction-feed.layout';
import PublicUserAuctionFeedLayout from '@/components/auction/public-user-auction-feed.layout';
import { AuthContext } from '@/components/auth/auth.provider';
import { ReactNode, use, useContext } from 'react';

interface Props {
  children: ReactNode;
  params: Promise<{
    username: string;
  }>;
}

function Layout({ children, params }: Props) {
  const { username } = use(params);
  const { jwtPayload } = useContext(AuthContext);

  if (jwtPayload?.username !== username)
    return (
      <PublicUserAuctionFeedLayout>{children}</PublicUserAuctionFeedLayout>
    );
  return (
    <PrivateUserAuctionFeedLayout>{children}</PrivateUserAuctionFeedLayout>
  );
}

export default Layout;
