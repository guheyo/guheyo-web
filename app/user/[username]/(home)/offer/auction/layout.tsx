'use client';

import PrivateUserAuctionFeedLayout from '@/components/auction/private-user-auction-feed.layout';
import { AuthContext } from '@/components/auth/auth.provider';
import { ReactNode, useContext } from 'react';

interface Props {
  children: ReactNode;
  params: {
    username: string;
  };
}

function Layout({ children, params }: Props) {
  const { jwtPayload } = useContext(AuthContext);

  if (jwtPayload?.username !== params.username) return children;
  return (
    <PrivateUserAuctionFeedLayout>{children}</PrivateUserAuctionFeedLayout>
  );
}

export default Layout;
