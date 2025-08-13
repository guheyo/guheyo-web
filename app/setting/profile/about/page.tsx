'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import SettingAbout from '@/components/setting/setting-about';
import { parseSocialAccountSettingPageLink } from '@/lib/social/parse-social-account-setting-page.link';
import { redirect } from 'next/navigation';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload, loading } = useContext(AuthContext);

  if (loading) return <div />;
  if (!jwtPayload) return redirect(parseSocialAccountSettingPageLink('kakao'));

  return <SettingAbout userId={jwtPayload.id} />;
}
