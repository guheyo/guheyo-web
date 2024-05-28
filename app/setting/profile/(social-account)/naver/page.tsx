'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import NaverAccount from '@/components/socials/naver-account';
import { useFindMyUserQuery } from '@/generated/graphql';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload, loading } = useContext(AuthContext);
  const { data, loading: userLoading } = useFindMyUserQuery({
    fetchPolicy: 'network-only',
  });

  if (loading || userLoading) return <div />;
  if (!jwtPayload) return <div />;
  if (!data?.findMyUser) return <div />;
  const user = data.findMyUser;

  return <NaverAccount socialAccounts={user.socialAccounts} />;
}
