'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import DiscordProfileLinker from '@/components/socials/discord-profile-linker';
import UserProfile from '@/components/users/user-profile';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload, loading } = useContext(AuthContext);

  if (loading) return <div />;
  if (!jwtPayload) return <div />;

  return (
    <div>
      <UserProfile username={jwtPayload.username} />
      <DiscordProfileLinker />
    </div>
  );
}
