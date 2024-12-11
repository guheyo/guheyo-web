'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import PrivateUserOfferFeedLayout from '@/components/offers/private-user-offer-feed.layout';
import PublicUserOfferFeedLayout from '@/components/offers/public-user-offer-feed.layout';
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
    return <PublicUserOfferFeedLayout>{children}</PublicUserOfferFeedLayout>;
  return <PrivateUserOfferFeedLayout>{children}</PrivateUserOfferFeedLayout>;
}

export default Layout;
