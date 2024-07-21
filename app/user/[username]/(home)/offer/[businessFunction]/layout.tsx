'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import PrivateUserOfferFeedLayout from '@/components/offers/private-user-offer-feed.layout';
import PublicUserOfferFeedLayout from '@/components/offers/public-user-offer-feed.layout';
import { ReactNode, useContext } from 'react';

interface Props {
  children: ReactNode;
  params: {
    username: string;
  };
}

function Layout({ children, params }: Props) {
  const { jwtPayload } = useContext(AuthContext);

  if (jwtPayload?.username !== params.username)
    return <PublicUserOfferFeedLayout>{children}</PublicUserOfferFeedLayout>;
  return <PrivateUserOfferFeedLayout>{children}</PrivateUserOfferFeedLayout>;
}

export default Layout;
