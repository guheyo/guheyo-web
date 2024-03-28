'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import SettingAbout from '@/components/setting/setting-about';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload, loading } = useContext(AuthContext);

  if (loading) return <div />;
  if (!jwtPayload) return <div />;

  return <SettingAbout userId={jwtPayload.id} />;
}
