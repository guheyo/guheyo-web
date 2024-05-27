'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import DummyKakaoAccount from '@/components/socials/dummy-kakao-account';
import KakaoAccount from '@/components/socials/kakao-account';
import { useFindMyUserQuery } from '@/generated/graphql';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload, loading } = useContext(AuthContext);
  const { data, loading: userLoading } = useFindMyUserQuery({
    fetchPolicy: 'network-only',
  });

  if (loading || userLoading) return <div />;
  if (!jwtPayload || !data?.findMyUser) return <DummyKakaoAccount />;
  const user = data.findMyUser;

  return <KakaoAccount socialAccounts={user.socialAccounts} />;
}
