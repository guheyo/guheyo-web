'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import DiscordProfileLinker from '@/components/socials/discord-profile-linker';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload, loading } = useContext(AuthContext);

  if (loading) return <div />;
  if (!jwtPayload)
    return (
      <div className="text-gray-300 text-sm md:text-base">
        이곳은 로그인하면 설정할 수 있는 프로필 페이지에요
      </div>
    );

  return <DiscordProfileLinker />;
}
