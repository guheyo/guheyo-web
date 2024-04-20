'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import PrivateUserProfile from '@/components/users/private-user-profile';
import PublicUserProfile from '@/components/users/public-user-profile';
import { useContext } from 'react';

function UserProfile({ username }: { username: string }) {
  const { jwtPayload } = useContext(AuthContext);
  if (jwtPayload?.username !== username)
    return <PublicUserProfile username={username} />;
  return <PrivateUserProfile />;
}

export default UserProfile;
