'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import Withdraw from '@/components/auth/withdraw';
import { useFindMyUserQuery } from '@/generated/graphql';
import { parseSocialAccountSettingPageLink } from '@/lib/social/parse-social-account-setting-page.link';
import { redirect } from 'next/navigation';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload, loading } = useContext(AuthContext);
  const { data, loading: userLoading } = useFindMyUserQuery({
    fetchPolicy: 'network-only',
  });

  if (loading || userLoading) return <div />;
  if (!jwtPayload || !data?.findMyUser)
    return redirect(parseSocialAccountSettingPageLink('kakao'));
  const user = data.findMyUser;

  return <Withdraw username={user.username} />;
}
